import { MediumText } from '@/components/TextSize';
import Image from 'next/image';
import styled from 'styled-components';
export const ContainerService = styled.div`
    display: flex;
    gap: 50px;
    @media screen and (max-width: 768px) {
     flex-direction: column;
    }
`;
export const Item = styled.div`
  padding: 15px;
  border:1px solid #e0e6ec;
  margin-top: 20px;
  box-shadow: rgba(20, 46, 170, 0.1) 5px 5px;
  text-align: center;
`;
export const ItemImg = styled(Image)`
  margin: auto;
  padding-bottom: 20px;
    padding-top: 15px;
`;
export const ItemTitle = styled(MediumText)`
font-weight: 500;
  
`;
export default ()=>{};