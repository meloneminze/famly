import styled from '@emotion/styled';
import Input from './Input.js';

export const ShoeIconInput = styled(Input)`
  placeholder: none;
  background-image: url('data:image/svg+xml,%3Csvg%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20data-prefix%3D%22fas%22%20data-icon%3D%22shoe-prints%22%20class%3D%22svg-inline--fa%20fa-shoe-prints%20fa-w-20%22%20role%3D%22img%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20512%22%3E%3Cpath%20fill%3D%22%23FEA630%22%20d%3D%22M192%20160h32V32h-32c-35.35%200-64%2028.65-64%2064s28.65%2064%2064%2064zM0%20416c0%2035.35%2028.65%2064%2064%2064h32V352H64c-35.35%200-64%2028.65-64%2064zm337.46-128c-34.91%200-76.16%2013.12-104.73%2032-24.79%2016.38-44.52%2032-104.73%2032v128l57.53%2015.97c26.21%207.28%2053.01%2013.12%2080.31%2015.05%2032.69%202.31%2065.6.67%2097.58-6.2C472.9%20481.3%20512%20429.22%20512%20384c0-64-84.18-96-174.54-96zM491.42%207.19C459.44.32%20426.53-1.33%20393.84.99c-27.3%201.93-54.1%207.77-80.31%2015.04L256%2032v128c60.2%200%2079.94%2015.62%20104.73%2032%2028.57%2018.88%2069.82%2032%20104.73%2032C555.82%20224%20640%20192%20640%20128c0-45.22-39.1-97.3-148.58-120.81z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  font-size: 1.5rem;
  background-position: 10%;
  background-size: 3rem;
  margin-left: 1rem;
  padding: 2rem;
  vertical-align: middle;
  text-align: right;
`;

export default ShoeIconInput;
