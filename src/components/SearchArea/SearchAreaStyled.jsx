import styled, { css, keyframes } from 'styled-components';
import { lightBlue } from '@material-ui/core/colors';

// SearchArea 공통
export const FieldTitle = styled.legend`
  position: absolute;
  top: -30px;
  left: 0;
  font-size: 1.4rem;
  color: #fff;
`;

// SearchArea Index;
export const SearchWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 20px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const SearchForm = styled.form`
  display: inline-block;
`;

export const SearchTop = styled.div`
  display: inline-block;
  & > *:not(.way-tab) {
    display: inline-block;
    position: relative;
    margin: 40px 0 0;
    border-right: 1px solid #eee;

    &:last-child {
      border-right: none;
    }
  }
  .way-tab {
    display: block;
  }
`;

export const SearchBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0;
`;

// 커스텀필요
export const NonstopsCheck = styled.input`
  width: 20px;
  height: 20px;
`;

// Option Popup
export const OptionPopupWrapper = styled.div`
  display: none;
  position: absolute;
  top: 70px;
  right: 0;
  width: 370px;
  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
`;

export const StyledOptionPopup = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Triangle = styled.div`
  position: absolute;
  top: -14px;
  right: 95px;
  width: 15px;
  height: 15px;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #fff;
  border-left: 15px solid transparent;
  margin: 0 auto;
`;

export const OptionPopup = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const CategoryTitle = styled.p`
  font-weight: 700;
  margin: 10px 0;
`;

export const SelectCabinClass = styled.select`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  border-radius: 5px;
`;

export const RequestRequiredNotice = styled.div`
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: #eee;
`;

export const CountArea = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
`;

export const CountButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  color: ${props => (props.disabled ? '#666' : `${lightBlue[800]}`)};
  background-color: ${props => (props.disabled ? '#eee' : '')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  border: 2px solid #eee;
`;

export const CountNum = styled.span`
  display: inline-block;
  width: 15px;
  text-align: center;
  font-size: 2.2rem;
  margin: 0 10px;
`;

export const AgeRangText = styled.span`
  margin-left: 10px;
`;

export const Notice = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  color: #999;
`;

export const CompleteButton = styled.button`
  color: #0288d1;
  font-weight: 700;
  border: 0;
  margin: 10px 0 0 auto;
  display: block;
`;

// SearchAirport

export const AirportInput = styled.input`
  width: 210px;
  height: 50px;
  border: 0;
  color: #000;
  padding-left: 10px;
`;

export const AirportChangeButton = styled.button`
  width: 50px;
  height: 50px;
`;

// SelectDate
export const DateButton = styled.button`
  width: 130px;
  height: 50px;
  border: 0;
  color: #000;
  padding-left: 10px;
`;

// SelectOption
export const SelectOptionWrap = styled.div`
  position: relative;
  color: #222;
`;

export const OptionButton = styled.button`
  width: 220px;
  height: 50px;
  padding: 0 10px;
  border: 0;
  color: #000;
`;

export const OptionValue = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Popup = styled.div`
  width: 370px;
  height: 460px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
`;

// SubmitButton
export const colorChange = keyframes`
  from {
    background-color: #0288d1;
  }

  to {
    background-color: #01579b;
  }
`;

export const SearchButton = styled.button`
  width: 150px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background-color: #0288d1;
  font-size: 1.8rem;
  font-weight: 700;
  &:hover {
    animation-name: ${colorChange};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;

export const ButtonText = styled.span`
  vertical-align: middle;
`;
