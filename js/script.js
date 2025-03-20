// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area of a triangle.
 */
function calculateAreaOfTriangle() {
  // input
  const lengthOfTriangle = parseFloat(
    document.getElementById("length-of-triangle").value
  )
  const heightOfTriangle = parseFloat(
    document.getElementById("width-of-triangle").value
  )

  // process
  const areaOfTriangle = (lengthOfTriangle * heightOfTriangle) / 2

  // output
  document.getElementById("area").innerHTML =
    "Area is: " + areaOfTriangle + " cm²"
}
