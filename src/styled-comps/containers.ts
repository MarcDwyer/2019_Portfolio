import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;

type PContainer = {
  bgColor?: string;
};
export const Container = styled.div<PContainer>`
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.bgColor || "#eee"};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
`;

export const Segment = styled.div<PContainer>`
  width: 100%;
  background-color: ${(p) => p.bgColor || "transparent"};
  `;

export const InnerSegment = styled.div`
  width: 90%;
  margin: 0 auto 0 auto;
`;
