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



PATH_PREFIX="/sys/bus/w1/devices"
PATH_POSTFIX="w1_slave"
OUT_PATH="/home/pi/temp.data.2024"
OUT_FILE=$(date --utc +%Y-%m-%d%z).csv
SEPARATOR=","

#SENSORS[0]=28-011453d9f5aa
#SENSORS[1]=28-011453f72eaa
#SENSORS[2]=28-0114543c8aaa
declare -A SENSORS
SENSORS[0]=28-011453d42baa


if [ ! -e $OUT_PATH ]; then
        mkdir -p $OUT_PATH
fi
if [ ! -d $OUT_PATH ]; then
        echo "ERROR: Output directory for data not present. Exiting ..."
        exit 1
fi
if [ ! -e $OUT_PATH/$OUT_FILE ]; then
        echo "sensor_id;timestamp;temperature_celsius" > $OUT_PATH/$OUT_FILE
fi
for SENSOR in "${SENSORS[@]}"; do
        TEMP_BINARY="$(cat $PATH_PREFIX/$SENSOR/$PATH_POSTFIX)"
        TIMESTAMP=$(date --utc +%Y-%m-%dT%H:%M:%SZ)
        TEMP_HUMAN=$(echo "scale=1; "$(echo ${TEMP_BINARY##*=})" / 1000" | bc)
        echo "$SENSOR$SEPARATOR$TIMESTAMP$SEPARATOR$TEMP_HUMAN" >> $OUT_PATH/$OUT_FILE
done;
pushd $OUT_PATH
        git add . && git commit -m 'auto-commit' && git push
popd
