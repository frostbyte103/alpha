#!/bin/bash

./gradlew ${1:-installDevDebug} --stacktrace && adb shell am start -n com.realmitch.buzbiz/host.exp.exponent.MainActivity
