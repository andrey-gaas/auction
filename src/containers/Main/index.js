import React from 'react';
import { Header, Container, Button, Card } from '../../components';
import {
  Root,
  TitleContainer,
  Title,
  BuyButtonContainer,
  FilterButtonContainer,
  Grid,
  CardContainer,
  Description,
} from './styles';

function Main() {
  return (
    <React.Fragment>
      <Header />
      <Root>
        <Container>
          <TitleContainer>
            <Title>Активные аукционы</Title>
            <FilterButtonContainer>
              <Button>Фильтр</Button>
            </FilterButtonContainer>
            <BuyButtonContainer>
              <Button>Купить ставки</Button>
            </BuyButtonContainer>
          </TitleContainer>

          <Grid>
            <CardContainer>
              <Card />
            </CardContainer>
            <CardContainer>
              <Card />
            </CardContainer>
            <CardContainer>
              <Card />
            </CardContainer>
            <CardContainer>
              <Card />
            </CardContainer>
          </Grid>

          <TitleContainer>
            <Title>Последние завершенные аукционы</Title>
          </TitleContainer>

          <Grid>
            <CardContainer>
              <Card completed />
            </CardContainer>
            <CardContainer>
              <Card completed />
            </CardContainer>
            <CardContainer>
              <Card completed />
            </CardContainer>
            <CardContainer>
              <Card completed />
            </CardContainer>
          </Grid>

          <TitleContainer>
            <Title>Предстоящие аукционы</Title>
          </TitleContainer>
          <Description>
            Список может изменяться
          </Description>

          <Grid>
            <CardContainer>
              <Card coming />
            </CardContainer>
            <CardContainer>
              <Card coming />
            </CardContainer>
            <CardContainer>
              <Card coming />
            </CardContainer>
            <CardContainer>
              <Card coming />
            </CardContainer>
          </Grid>

        </Container>
      </Root>
    </React.Fragment>
  );
}

export default Main;
