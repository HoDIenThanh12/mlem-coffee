import React from 'react'
import { ContainerService, Item, ItemImg, ItemTitle } from './styled'
import { NormalText } from '@/components/TextSize'
import { images } from '@/common/images'

const Service = () => {
  return (
    <ContainerService>
        <Item>
            <ItemImg src={images.icon.avatarHome1} />
            <ItemTitle>
            GIAO HÀNG MIỄN PHÍ TỪ $250
            </ItemTitle>
            <NormalText>
            Lorem ipsum dolor Sed ut perspiciatis unde omnis
            </NormalText>
        </Item>
        <Item>
        <ItemImg src={images.icon.avatarHome1} />
            <ItemTitle>
            MIỄN PHÍ LẮP ĐẶT
            </ItemTitle>
            <NormalText>
            Lorem ipsum dolor Sed ut perspiciatis unde omnis
            </NormalText>
        </Item>
        <Item>
        <ItemImg src={images.icon.avatarHome1} />
            <ItemTitle>
            ĐẢM BẢO HOÀN LẠI TIỀN
            </ItemTitle>
            <NormalText>
            Lorem ipsum dolor Sed ut perspiciatis unde omnis
            </NormalText>
        </Item>
    </ContainerService>
  )
}

export default Service