
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Grid className="projects-grid">
                    <Cell col={4}>
                        <Card shadow={5} style={{ minWidth: '300px', margin: 'auto', marginBottom: '20px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px',background: '#000'  }}>
                                HealthBioApp
                            </CardTitle>
                            <CardText>
                                A HealthBioApp that helps you to be able to know more about the symptoms, causes and prevention of various chronic diseases.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/Dianaiminza/Health-Bio-App" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                                <Button colored><a href="https://dianaiminza.github.io/Health-Bio-App/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{ minWidth: '300px', margin: 'auto', marginBottom: '20px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px' ,background: '#000' }}>
                              JumiaKenyaCloneApp
                            </CardTitle>
                            <CardText>
                              Jumia Kenya Clone App.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/Dianaiminza/jumiaclone" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                                <Button colored><a href="https://jumiakenyaclone.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={5}style={{ minWidth: '300px', margin: 'auto', marginBottom: '20px' }}>
               <CardTitle style={{color:'#fff',height:'176px',background: '#000' }}> 
               Kicks Kenya</CardTitle>
               <CardText>Kicks Kenya is an e-commerce website that helps people to be able to buy and order shoes</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/KicksKenya"target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href="https://kickskenya-fa0f5.web.app"target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
              </CardMenu>
               </Card>
                    </Cell>

                    <Cell col={4}>
                    <Card shadow={5}style={{ minWidth: '300px', margin: 'auto', marginBottom: '20px' }}>
             <CardTitle style={{color:'#fff',height:'176px',background: '#000' }}> 
             ChuckNorris App</CardTitle>
               <CardText>ChuckNorris App</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/ChuckNorris"target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href=" https://dianaiminza.github.io/ChuckNorris/"target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
              
              </CardMenu>
               </Card>
                    </Cell>

                    <Cell col={4}>
                    <Card shadow={5}style={{ minWidth: '300px', margin: 'auto', marginBottom: '20px' }}>
             <CardTitle style={{color:'#fff',
             height:'176px',background: '#000' 
           }}> Vanilla Restaurant App</CardTitle>
               <CardText>Vanilla Restaurant App</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/vanillarestaurant"target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href=" https://github.com/Dianaiminza/vanillarestaurant"target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
              
              </CardMenu>
               </Card>
                    </Cell>

                    <Cell col={4}>
                    <Card shadow={5}style={{ minWidth: '300px', margin: 'auto', marginBottom: '20px' }}>
             <CardTitle style={{color:'#fff',height:'176px',background: '#000' 
            }}> OGV Limited E-Commerce App</CardTitle>
               <CardText>OGV Limited E-Commerce App</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/OGV"target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href="https://ogv.netlify.app/"target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
              
              </CardMenu>
               </Card>
                    </Cell>
                  
                </Grid>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>RECENT PROJECTS</Tab>
                </Tabs>

                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }
}

export default Projects;
