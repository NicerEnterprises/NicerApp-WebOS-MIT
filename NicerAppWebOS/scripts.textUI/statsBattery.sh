#!/bin/bash
BATTERY_DIR=/proc/acpi/battery/BAT1
AC_DIR=/proc/acpi/ac_adapter/ADP1

if [ -d ${BATTERY_DIR} ]; then
if grep -q 'last full capacity' ${BATTERY_DIR}/info ; then
        FULL_BATTERY=$( awk '/last full capacity/ {print $4}' ${BATTERY_DIR}/info )
        CURRENT_BATTERY=$( awk '/remaining capacity/ {print $3}' ${BATTERY_DIR}/state )
        PERCENT=$(( ${CURRENT_BATTERY} * 100 / ${FULL_BATTERY} ))
        if grep -q on-line ${AC_DIR}/state; then
		echo "BATTERY(r1) $PERCENT%"
        else
		echo "BATTERY(r2) $PERCENT%"
        fi
else
        echo "{NO_BATTERY_PRESENT}"
fi
fi
