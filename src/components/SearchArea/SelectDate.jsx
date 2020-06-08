import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import koLocale from 'moment/locale/ko';
import 'react-dates/lib/css/_datepicker.css';
import './Date.css';
import * as S from './SearchAreaStyled';
import styled from 'styled-components';

const DateRangeWrapper = styled.div``;

const SelectDate = ({
  way,
  selectOutboundDate,
  selectInboundDate,
  momentOutDate,
  momentInDate,
  selectMomentOutboundDate,
  selectMomentInboundDate,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    moment.locale('ko', koLocale);
  }, []);

  useEffect(() => {
    selectOutboundDate(moment(momentOutDate).format('YYYY-MM-DD'));
    selectMomentOutboundDate(momentOutDate);
  }, [momentOutDate, selectMomentOutboundDate, selectOutboundDate]);

  useEffect(() => {
    if (way === 'oneway') {
      selectInboundDate(null);
    } else {
      if (momentInDate) selectInboundDate(momentInDate.format('YYYY-MM-DD'));
    }
  }, [momentInDate, selectInboundDate, way]);

  const setStartDate = startDate => {
    selectOutboundDate(moment(startDate).format('YYYY-MM-DD'));
    selectMomentOutboundDate(startDate);
  };

  const setEndDate = endDate => {
    if (!endDate) return;

    selectInboundDate(moment(endDate).format('YYYY-MM-DD'));
    selectMomentInboundDate(endDate);
  };

  return (
    <fieldset className="option-field date">
      <S.FieldTitle>가는날 / 오는날</S.FieldTitle>
      <DateRangeWrapper
        className={
          focusedInput === 'startDate' ? 'openStartDate' : 'openEndDate'
        }
      >
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={momentOutDate}
          endDate={way === 'round' ? momentInDate : null}
          endDatePlaceholderText={way === 'oneway' ? '(편도)' : '입국날짜'}
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={focusedInput => setFocusedInput(focusedInput)}
          disabled={way === 'oneway' ? 'endDate' : null}
          numberOfMonths={1}
          required={true}
          displayFormat="YYYY년 MM월 DD일"
          hideKeyboardShortcutsPanel={true}
          noBorder={true}
          readOnly={true}
        />
      </DateRangeWrapper>
    </fieldset>
  );
};

export default SelectDate;
