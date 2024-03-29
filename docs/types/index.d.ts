/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Returns the number of non-singleton dimensions.
*
* ## Notes
*
* -   A singleton dimension is a dimension whose size is equal to `1`.
*
* @param shape - array shape
* @returns number of non-singleton dimensions
*
* @example
* var n = nonsingletonDimensions( [ 3, 3, 1, 2 ] );
* // returns 3
*
* @example
* var n = nonsingletonDimensions( [ 1, 1 ] );
* // returns 0
*/
declare function nonsingletonDimensions( shape: ArrayLike<number> ): number;


// EXPORTS //

export = nonsingletonDimensions;
