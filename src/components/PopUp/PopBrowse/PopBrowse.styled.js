import { styled } from "styled-components";

 export const PopBrowseContent = styled.div `
 display: block;
 width: 100%;
 height: 100%;
 min-width: 375px;
 min-height: 100vh;
 position: absolute;
 top: 0;
 left: 0;
 z-index: 7;
 `;

 export const PopBrowseContainer = styled.div `
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
 `;

 export const PopBrowseBlock = styled.div `
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
 `;

 export const PopBrowseContents = styled.div `
   display: block;
   text-align: left;
 `;