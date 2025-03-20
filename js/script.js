// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle () {
  // input
  const lengthOfTriangle = parseInt(document.getElementById('length-of-triangle').value)
  const heightOfTriangle = parseInt(document.getElementById('width-of-triangle').value)

  // process
  const areaOfTriangle = (lengthOfTriangle * heightOfTriangle) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}
