import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getApps} from '../actions/apps';
import {Container, Grid, Header, Card, Image} from 'semantic-ui-react';

class Apps extends Component {
  componentDidMount() {
    this
      .props
      .dispatch(getApps());
  }

  apps = () => {
    return this
      .props
      .apps
      .map(app => {
        return (
          <Grid.Column computer={4} mobile={16} tablet={16}>
            <Card>
              <Image style={styles.appCard} src={app.logo}/>
              <Card.Content>
                <Card.Header>{app.name}</Card.Header>
                <Card.Meta>
                  <span>{app.author}</span>
                </Card.Meta>
                <Card.Description style={styles.appDescription}>
                  {app.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to={`/apps/${app.id}`}>View App</Link>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })
  }

  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>Apps</Header>
        <Grid columns={16}>
          <Grid.Row>
            {this.apps()}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  appDescription: {
    Height: '100px',
    overflowY: 'scroll',
    paddingBottom : '10px',
    marginBottom : '10px',
  },
  appCard:{
    height: 'auto',
    paddingBottom: '10px',
    paddingBottom: '10px',
  }
}

const mapStateToProps = (state) => {
  return {apps: state.apps};
}

export default connect(mapStateToProps)(Apps);