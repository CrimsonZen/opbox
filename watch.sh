#!/bin/bash

webpack --config webpack.config.js --watch&
nodemon server.js
