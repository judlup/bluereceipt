import React, {Component} from 'react';

import Checkbox from '../../CoreUI/Checkbox/Checkbox'
import Label from '../../CoreUI/Label/Label'

import './Root.scss';

class Root extends Component {
  static propTypes = {
    
  };
  constructor(props:any) {
    super(props);
    this.state = {
      checkboxStatus: '',
      check:''          
    };   

    this.fn = this.fn.bind(this)        
  }
  
  fn(e:boolean) {
    console.log(e)
    if(e){
      this.setState({checkboxStatus:"TRUE"});
    }else{
      this.setState({checkboxStatus:"FALSE"});
    }
  }  

  render() {       
    // const { check, checkboxStatus } = this.state;
    return (
      <div>        
        <div>
          <div className="title">Checkbox</div>
          <div className="box">
            <Label title="Normal"> </Label>          
            <Checkbox className="box_text" label=" Checkbox" onChange={(e) => this.fn(e)}></Checkbox>
          </div>        
          <div className="box">
            <Label title="Hover"> </Label>  
            <Checkbox label=" Checkbox"  onChange={(e) => this.fn(e)}></Checkbox>
          </div>
          <div className="box">
          <Label title="Focus"> </Label>  
          <Checkbox label=" Checkbox"  onChange={(e) => this.fn(e)}></Checkbox>
          </div>
          <div className="box">
          <Label title="Active"> </Label>  
          <Checkbox checked={true} label=" Checkbox"  onChange={(e) => this.fn(e)}></Checkbox>
          </div>
          <div className="box">
          <Label title="Disabled"> </Label>  
          <Checkbox disabled={true} label=" Checkbox"  onChange={(e) => this.fn(e)}></Checkbox>
          </div>
        </div>
      </div>
    )
  }
}

export default Root;
