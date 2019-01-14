import React from 'react'
import moment from 'moment';
import Moment from 'react-moment';

export function getDateFromNow(date) {
    if(moment(date).isBefore(moment().subtract(3, "days"))){
        return moment(date).format('llll');
    }
    else {
        return <Moment fromNow>{date}</Moment>
    }
}