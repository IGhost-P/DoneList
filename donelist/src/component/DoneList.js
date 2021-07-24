import React from 'react';
import styled from 'styled-components';
import DoneItem from './DoneItem'

const DoneListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function DoneList() {
    return <DoneListBlock>
        <DoneItem text="프로젝트 생성하기" done={true} />
        <DoneItem text="컴포넌트 스타일링 하기" done={true} />
        <DoneItem text="Context 만들기" done={false} />
        <DoneItem text="기능 구현하기" done={false} />
    </DoneListBlock>;
}

export default DoneList;