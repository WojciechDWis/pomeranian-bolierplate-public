import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as NumbersAndBoolean } from './JsNumbersTraning/router-data';
import { blockRouterMetaData as EmptyValueAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JsArrays } from './JsArraysBasics/router-data';
import { blockRouterMetaData as JsArrayMethodsExercise } from './JsArrayMethodsExercise/router-data';
import { blockRouterMetaData as JsStringsAsArrays } from './JsStringsAsArrays/router-data';
import { blockRouterMetaData as JsObjectsBasics } from './JsObjectsBasics/router-data';
import { blockRouterMetaData as JsDateTime } from './JsDateTime/router-data';
import { blockRouterMetaData as JsFunctionBasics } from './JsFunctionsBasics/router-data';
import { blockRouterMetaData as Hoisting } from './Hoisting/router-data';
import { blockRouterMetaData as ExerciseJsFunctions } from './ExerciseJsFunctions/router-data';
import { blockRouterMetaData as Blok22Warmup } from './Blok22Warmup/router-data';
import { blockRouterMetaData as SetTimeout } from './SetTimeout/router-data';
import { blockRouterMetaData as VanishString } from './VanishString/router-data';
import { blockRouterMetaData as Timer } from './Timer/router-data';
import { blockRouterMetaData as SlidingBanner } from './SlidingBanner/router-data';
import { blockRouterMetaData as JsAnimation } from './JsAnimation/router-data';
import { blockRouterMetaData as HitTheMole } from './HitTheMoleGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  NumbersAndBoolean,
  EmptyValueAndComments,
  JsArrays,
  JsArrayMethodsExercise,
  JsStringsAsArrays,
  JsObjectsBasics,
  JsDateTime,
  JsFunctionBasics,
  Hoisting,
  ExerciseJsFunctions,
  Blok22Warmup,
  SetTimeout,
  VanishString,
  Timer,
  SlidingBanner,
  JsAnimation,
  HitTheMole,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
