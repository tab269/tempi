#!/bin/bash

# author: Thomas Bertz (https://thomas-a-bertz.de/)
# TODOs
# * implement error cases
# * * wrong cmd-line usage
# * * unknown sensor ID
# * * CRC not OK
# * write to (file) cache
# * insert (cached) data into (remote) database
# * make SAMPLE_DELAY_SECONDS a cmd-line parameter
# * exit, when dependencies are not met (e.g. 'bc')
# * write in CSV format


SAMPLE_DELAY_SECONDS=3

PATH_PREFIX="/sys/bus/w1/devices"
PATH_POSTFIX="w1_slave"

declare -A SENSORS
SENSORS[0]=28-011453d9f5aa
SENSORS[1]=28-011453f72eaa
SENSORS[2]=28-0114543c8aaa

while true; do
	for SENSOR in "${SENSORS[@]}"; do
		TEMP_BINARY="$(cat $PATH_PREFIX/$SENSOR/$PATH_POSTFIX)"
		TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S.%N%z)
		TEMP_HUMAN=$(echo "scale=1; "$(echo ${TEMP_BINARY##*=})" / 1000" | bc)
		echo "Temperature of sensor $SENSOR at $TIMESTAMP = $TEMP_HUMAN°C"
	done;
	sleep $SAMPLE_DELAY_SECONDS
done;

