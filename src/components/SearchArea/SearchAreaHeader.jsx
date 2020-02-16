import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
import A11yTitle from '../Common/A11yTitle';
import * as S from './SearchAreaStyled';
import SearchAreaContainer from '../../container/SearchAreaContainer';
import moment from 'moment';
import koLocale from 'moment/locale/ko';

const SearchAreaHeader = ({
  location,
  originName,
  destinationName,
  getConfigure,
  selectStops,
  outboundDate,
  inboundDate,
}) => {
  useEffect(() => {
    moment.locale('ko', koLocale);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const path = location.pathname
      .slice(1, -1)
      .split('/')
      .slice(2);
    //   location.pathname
    //   inboundDate: '2020-02-19',
    //   originPlace: 'ICN-sky',
    //   destinationPlace: 'CJU-sky',
    //   outboundDate: '2020-02-10',

    const query = qs.parse(location.search);
    const {
      cabinclass: cabinClass,
      children,
      infants,
      adults,
      preferdirects,
      rtn,
    } = query;

    // 직항 & 경유 초기세팅
    if (preferdirects === 'true') selectStops(0);
    else selectStops(1);

    if (+rtn) {
      const [originPlace, destinationPlace, outboundDate, inboundDate] = path;
      // 2020-02-16
      const outBound = moment(`20${outboundDate}`).format('YYYY-MM-DD');
      const momentOutBound = moment(moment(`20${outboundDate}`));
      const inBound = moment(`20${inboundDate}`).format('YYYY-MM-DD');
      const momentInBound = moment(moment(`20${inboundDate}`));

      // 초기세팅
      getConfigure({
        originPlace,
        destinationPlace,
        outboundDate: outBound,
        momentOutDate: momentOutBound,
        inboundDate: inBound,
        momentInDate: momentInBound,
      });

      console.log(
        '왕복',
        originPlace,
        destinationPlace,
        outboundDate,
        inboundDate,
      );
    } else {
      const [originPlace, destinationPlace, outboundDate] = path;
      console.log('편도', originPlace, destinationPlace, outboundDate);
    }
  }, [getConfigure, location.pathname, location.search, selectStops]);

  const showSearchForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <S.SearchHeaderWrapper>
        <S.FlightInfoSection onClick={showSearchForm}>
          <A11yTitle>항공권 입력 정보</A11yTitle>
          <S.AirportInfoBox>
            <S.AirportName>{originName}</S.AirportName>
            <S.FlightIcon
              src="/images/flight-white.png"
              alt="출발지에서 도착지로 이동"
            />
            <S.AirportName>{destinationName}</S.AirportName>
          </S.AirportInfoBox>
          <S.OptionArea isOpen={isOpen}>
            <S.DateOpionInfoBox>
              <S.DateText>{moment(outboundDate).format('LL')}</S.DateText>
              <S.DateText>{moment(inboundDate).format('LL')}</S.DateText>
            </S.DateOpionInfoBox>
            <S.DateOpionInfoBox>
              <S.OptionText>1 성인</S.OptionText>
              <S.OptionText>일반석</S.OptionText>
              <S.OptionText>왕복</S.OptionText>
            </S.DateOpionInfoBox>
          </S.OptionArea>
        </S.FlightInfoSection>
        <SearchAreaContainer isOpen={isOpen} isHeader={true} />
        <S.DownButton type="button" onClick={showSearchForm}>
          <S.ArrowIcon
            src="/images/arrow-white-down.png"
            alt="항공권 정보 재입력하기"
            isOpen={isOpen}
          />
        </S.DownButton>
      </S.SearchHeaderWrapper>
    </>
  );
};

export default withRouter(SearchAreaHeader);
