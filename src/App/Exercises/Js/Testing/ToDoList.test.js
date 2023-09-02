import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { ToDoList } from './ToDoList';
import {
  TODO_NAMES,
  getNumberOfTasks,
  getRandomInt,
  getRandomTaskName,
} from './ToDoList';

describe('getNumberOfTasks', () => {
  test('returns 0 for empty array', () => {
    const size = getNumberOfTasks([]);
    expect(size).toBe(0);
  });

  it('returns undefined if parameter is not an array obj', () => {
    expect(getNumberOfTasks({ first: 1 })).toBeUndefined();
    expect(getNumberOfTasks(1)).toBeUndefined();
    expect(getNumberOfTasks('Alfa')).toBeUndefined();
  });

  it('returns number equal to array length', () => {
    expect(getNumberOfTasks([1, 2])).toBe(2);
  });

  it('throws Error if parameter is undefined', () => {
    expect(() => getNumberOfTasks()).toThrow(/missing/);
  });
});

describe('getRandomTaskName', () => {
  it('returns first element from test data', () => {
    const getRandomMock = jest.fn().mockReturnValue(0);
    expect(getRandomTaskName(getRandomMock)).toEqual(TODO_NAMES.at(0));
  });

  it('returns last element from test data', () => {
    const lastIndex = TODO_NAMES.length - 1;
    const getRandomMock = jest.fn().mockImplementation((number) => number - 1);
    expect(getRandomTaskName(getRandomMock)).toEqual(TODO_NAMES.at(lastIndex));
  });
});

describe('getRandomInt', () => {
  beforeAll(() => {
    jest.spyOn(Math, 'random');
  });
  afterAll(() => {
    //  !important
    // Math.random.mockRestore();
    jest.restoreAllMocks();
  });

  it('returns (param -1) when random is close to one', () => {
    Math.random.mockImplementation(() => 0.999);
    expect(getRandomInt(8)).toBe(7);
  });
  it('returns 0 when random is close to zero', () => {
    Math.random.mockImplementation(() => 0.0001);
    expect(getRandomInt(8)).toBe(0);
  });
  it('returns 0 when random is zero', () => {
    Math.random.mockReturnValue(0);
    expect(getRandomInt(8)).toBe(0);
  });
});

const testData = [
  {
    id: 105,
    title: 'Research Topic',
    note: 'Research Topic',
    author: 'Anonymous',
    isDone: false,
    createdAt: '2023-08-25T10:36:22.070Z',
  },
  {
    id: 106,
    title: 'Grocery Shopping',
    note: 'Grocery Shopping',
    author: 'Anonymous',
    isDone: false,
    createdAt: '2023-08-25T10:36:34.700Z',
  },
];

const DELAY = 100;

const successfulFetch = () =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(testData),
      });
    }, DELAY); //  setTimeout even with 0 is important!
  });

const networkErrorFetch = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Network request failed')), DELAY);
  });

const failedFetch = () =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
        ok: false,
        status: 500,
      });
    }, DELAY); //  setTimeout even with 0 is important!
  });

function parseIdFromPath(path) {
  const pathParts = path.split('/');
  const idString = pathParts[pathParts.length - 1];
  const id = parseInt(idString, 10); // Convert the string to an integer
  return isNaN(id) ? null : id; // Return null if parsing fails
}

const deleteFetch = (path) =>
  new Promise((resolve, _) => {
    const id = parseIdFromPath(path);
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => Promise.resolve({ id }),
      });
    }, DELAY); //  setTimeout even with 0 is important!
  });

const postFetch = (path) =>
  new Promise((resolve, _) => {
    const id = parseIdFromPath(path);
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => Promise.resolve({ title: 'TEST' }),
      });
    }, DELAY); //  setTimeout even with 0 is important!
  });

describe('ToDoList', () => {
  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });

  beforeEach(() => {
    fetch.mockImplementation(successfulFetch);
  });
  afterAll(() => {
    fetch.mockRestore();
  });

  it('renders correctly', () => {
    render(<ToDoList />);
    const heading = screen.getByRole('heading', {
      name: /todo list/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it('has refresh button', () => {
    render(<ToDoList />);
    const button = screen.getByRole('button', {
      name: /refresh/i,
    });
    expect(button).toBeInTheDocument();
  });

  it('has delete button', async () => {
    render(<ToDoList />);
    const deleteButtons = await screen.findAllByRole('button', {
      name: /delete/i,
    });
    expect(deleteButtons.length).toBe(2);
    screen.logTestingPlaygroundURL();
  });
  it('shows error message when there network connection fails', async () => {
    fetch.mockImplementation(networkErrorFetch);
    render(<ToDoList />);
    await waitFor(() => {
      expect(screen.getByText(/Network request failed/i)).toBeInTheDocument();
    });
  });

  it('returns list with elements on load', async () => {
    render(<ToDoList />);
    await waitFor(() =>
      expect(screen.getByText(new RegExp(testData[0]?.title, 'i')))
    );
    await waitFor(() =>
      expect(screen.getByText(new RegExp(testData[1]?.title, 'i')))
    );
    expect(screen.getByTestId('number-of-tasks')).toHaveTextContent(
      testData.length
    );
  });

  it('it returns new results after refresh button pressed', async () => {
    render(<ToDoList />);
    const refreshButton = screen.getByRole('button', {
      name: /refresh/i,
    });
    fireEvent.click(refreshButton);
    const firstElement = await screen.findAllByText(
      new RegExp(testData[0]?.title, 'i')
    );
    expect(firstElement).toHaveLength(1);
  });

  it('it shows error when GET todo fails', async () => {
    fetch.mockImplementation(failedFetch);
    render(<ToDoList />);
    // await waitFor(() => screen.getByText(/Invalid response/i));
    const message = await screen.findByText(/Invalid response/i);
    expect(message).toHaveTextContent('500');
  });

  it('it hides error after 2 seconds', async () => {
    fetch.mockImplementation(failedFetch);
    render(<ToDoList />);
    const message = await screen.findByText(/Invalid response/i);
    await waitFor(() => expect(message).toBeEmptyDOMElement(), {
      timeout: 2500,
    });
  });

  it('it calls delete function with proper id', async () => {
    render(<ToDoList />);
    const row = await screen.findByRole('row', {
      name: /grocery shopping 25\.08\.2023, 12:36 delete/i,
    });

    const deleteButton = within(row).getByRole('button', {
      name: /delete/i,
    });
    fetch.mockImplementation(deleteFetch);
    fireEvent.click(deleteButton);
    await waitFor(() =>
      expect(screen.getByText(/usunięto zadanie/i)).toBeInTheDocument()
    );
    const message = screen.getByText(/usunięto zadanie/i);
    expect(message).toHaveTextContent(testData[1].id);
  });

  it('it shows error when DELETE todo fails', async () => {
    render(<ToDoList />);
    const row = await screen.findByRole('row', {
      name: /grocery shopping 25\.08\.2023, 12:36 delete/i,
    });
    fetch.mockImplementation(failedFetch);
    const deleteButton = within(row).getByRole('button', {
      name: /delete/i,
    });
    fireEvent.click(deleteButton);
    const message = await screen.findByText(/Invalid response/i);
    expect(message).toHaveTextContent('500');
  });

  it('sends POST after add is clicked using TODOs array', async () => {
    render(<ToDoList />);
    const addButton = screen.getByRole('button', {
      name: /add random/i,
    });
    fetch.mockImplementation(postFetch);
    fireEvent.click(addButton);
    const message = await screen.findByText(/dodano zadanie/i);
    expect(message).toHaveTextContent('TEST');
  });

  it('it shows error when POST todo fails', async () => {
    render(<ToDoList />);
    const addButton = screen.getByRole('button', {
      name: /add random/i,
    });
    fetch.mockImplementation(failedFetch);
    fireEvent.click(addButton);
    const message = await screen.findByText(/Invalid response/i);
    expect(message).toHaveTextContent('500');
  });
});
