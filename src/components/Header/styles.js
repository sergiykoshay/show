import styled from 'styled-components';

export const HeaderStyle = styled.div`
    background-color: ${({ theme }) => theme.backgroundSecondary};
    padding: 3px 24px;
    margin:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.textSecondary};
    font-size: 20px;
    font-weight: 300;
    margin-top: 24px;
    margin-bottom: 26px;

`;

export const SubTitle = styled.h2`
        color: ${({theme}) => theme.textSecondary};


`;