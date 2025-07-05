/*
 * Copyright 2025 Scott Bender <scott@scottbender.net>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

export function fixIdentifier(str: string, prefix: string = '') {
  let res = str

  const firstChar = str[0]
  if (
    !(
      (firstChar >= 'a' && firstChar <= 'z') ||
      (firstChar >= 'A' && firstChar <= 'Z') ||
      firstChar === '_' ||
      firstChar === '$'
    ) &&
    firstChar !== '+' &&
    firstChar !== '-'
  ) {
    res = `${prefix}` + str
  }

  let newS = ''
  for (let i = 0; i < res.length; i++) {
    const char = res[i]

    if (char == '-') {
      newS = newS + 'Minus'
    } else if (char === '+') {
      newS = newS + 'Plus'
    } else if (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9') ||
      char === '_' ||
      char === '$'
    ) {
      newS = newS + char
    }
  }
  return newS
}
