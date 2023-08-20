export function formatDate(text) {
  const date = new Date(text);
  const formatter = new Intl.DateTimeFormat('pl', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
  return formatter.format(date);
}
