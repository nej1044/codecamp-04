import { css } from "@emotion/react";


export const globalStyles = css`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  @font-face {
    font-family: "Black Han";
    src: url("/fonts/BlackHanSans-Regular.ttf");
  }

  @font-face {
    font-family: "RoomNo703";
    src: url("/fonts/RoomNo703.otf");
  }

  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
