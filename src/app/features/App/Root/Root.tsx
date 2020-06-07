import React, {Component} from 'react';

import Checkbox from '../../CoreUI/Checkbox/Checkbox'
import Label from '../../CoreUI/Label/Label'
import Select from '../../CoreUI/Select/Select'
import Input from '../../CoreUI/Input/Input'
import Button from '../../CoreUI/Button/Button'

import './Root.scss';

class Root extends Component {
  static propTypes = {
    
  };
  constructor(props:any) {
    super(props);
    this.state = {
      checkboxStatus: '',
      check:'',
      isOpen:false,          
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

  open(){    
    // this.setState({isOpen:!this.state.isOpen})
  }

  render() {       
    const { isOpen } = this.state;
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
          <Checkbox label=" Checkbox"  onChange={(e) => this.fn(e)}></Checkbox>
          </div>
          <div className="box">
          <Label title="Disabled"> </Label>  
          <Checkbox disabled={true} label=" Checkbox"  onChange={(e) => this.fn(e)}></Checkbox>
          </div>
        </div>

        <div>
          <div className="title">Select</div>
          <div className="box">
            <Label title="Normal"> </Label>          
            <Select label="Label" >
              <Label title="asd"></Label>
              <Checkbox label=" Checkbox" onChange={(e) => this.fn(e)}></Checkbox>            
            </Select>
          </div>          
          <div className="box">
            <Label title="Normal"> </Label>          
            <Select label="Label" isOpen={true}>
              <Label title="asd"></Label>
              <Checkbox label=" Checkbox" onChange={(e) => this.fn(e)}></Checkbox>            
            </Select>
          </div>
          <div className="box">
            <Label title="Normal"> </Label>          
            <Select label="Label" isOpen={true}>
              <Label title="asd"></Label>
              <Checkbox label=" Checkbox" onChange={(e) => this.fn(e)}></Checkbox>            
            </Select>
          </div>
          <div className="box">
            <Label title="Disabled"> </Label>          
            <Select label="Label" disabled>              
            </Select>
          </div>                      
        </div> 
        
        <div>
          <div className="title">Form</div>
          <div className="boxForm">
          <Label title="Name"></Label>
          <Input placeholder="Enter your first name"></Input>
          </div>
          <div className="boxForm">
          <Label title="Last Name"></Label>
          <Input placeholder="Enter your last name"></Input>
          </div>
          <div className="boxForm">
          <Label title="Email"></Label>
          <Input placeholder="Enter your email"></Input>
          </div>
          <div className="boxForm">
          <Label title="Phone Number"></Label>
          <Input placeholder="Enter your phone number"></Input>
          </div>
          <div className="boxForm">
          <Label title="Marketing Role"></Label>
            <Select label="Label" disabled>              
          </Select>
          </div>          
          <Checkbox label="Customer Accepts Marketing" onChange={(e) => this.fn(e)}></Checkbox>
          <Button>Add discount</Button>
        </div>
      </div>      
    )
  }
}

export default Root;
