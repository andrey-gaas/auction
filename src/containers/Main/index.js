import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { lotsFetch } from '../../store/AC/lots';
import { Header, Container, Button, Card, Footer } from '../../components';
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

function Main({ lotsFetch, active, completed, coming }) {
  
  useEffect(() => {
    lotsFetch('active');
  }, [lotsFetch]);
  
  useEffect(() => {
    lotsFetch('completed');
  }, [lotsFetch]);
  
  useEffect(() => {
    lotsFetch('coming');
  }, [lotsFetch]);

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
          </TitleContainer>

          <Grid>
            {
              active.length ?
                active.map(lot =>
                  <CardContainer key={lot.id}>
                    <Card type={lot.status} data={lot} />
                  </CardContainer>
                )
                : <span>Загрузка...</span>
            }
          </Grid>

          <TitleContainer>
            <Title>Последние завершенные аукционы</Title>
          </TitleContainer>

          <Grid>
            {
              completed.length ?
                completed.map(lot =>
                  <CardContainer key={lot.id}>
                    <Card type={lot.status} data={lot} />
                  </CardContainer>
                )
                : <span>Загрузка...</span>
            }
          </Grid>

          <TitleContainer>
            <Title>Предстоящие аукционы</Title>
          </TitleContainer>
          <Description>
            Список может изменяться
          </Description>

          <Grid>
            {
              coming.length ?
                coming.map(lot =>
                  <CardContainer key={lot.id}>
                    <Card type={lot.status} data={lot} />
                  </CardContainer>
                )
                : <span>Загрузка...</span>
            }
          </Grid>

        </Container>

        <Footer />
      </Root>
    </React.Fragment>
  );
}

Main.propTypes = {
  lotsFetch: PropTypes.func.isRequired,
  active:    PropTypes.array.isRequired,
  completed: PropTypes.array.isRequired,
  coming:    PropTypes.array.isRequired,
};

const mapStateToProps = ({ lots }) => ({
  active: lots.active,
  completed: lots.completed,
  coming: lots.coming,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  lotsFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
