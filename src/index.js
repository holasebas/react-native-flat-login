
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  TextInput,
  Animated,
  ActivityIndicator,
  KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types'

let deviceWidth = Dimensions.get('window').width

export default class FlatLogin extends Component {
  static propTypes = {
        onIndexChanged: PropTypes.func,
        titleTxt:PropTypes.string,
        titleStyle:PropTypes.object,
        noteTxt:PropTypes.string,
        noteStyle:PropTypes.object,
        placeHolders:PropTypes.array,
        colorSet:PropTypes.array,
        buttomText:PropTypes.string,
        spinnerColor:PropTypes.string,
        inputTextStyle:PropTypes.object
     
  }

  static defaultProps = {
        onIndexChanged: () => null,
        titleTxt:"SIGN UP",
        titleStyle:{
          marginTop:20,
          marginLeft:20,
          fontSize:20,
          fontWeight:'800',
          color:'#000'
        },
        noteTxt:"Fill in all information",
        noteStyle:{
          fontSize:12,
          marginLeft:20,
          fontSize:14,
          letterSpacing:1,
          color:"#999"
        },
        placeHolders:["ENTER YOUR EMAIL HERE","ENTER YOUR PASSWORD HERE","REPEAT YOUR PASSWORD HERE"],
        colorSet:["#fAfAfA","#77A7DF","#5391D8", "#5391D8"],
        buttomText:"GO",
        spinnerColor:"#80B4E1",
        inputTextStyle:
        {
          flex:1, 
          width:'100%',
          paddingLeft:30,
          paddingTop:10,
          color:'#80B4E1'
        }
  }


  constructor(props) {
        super(props);
        this.a = React.createRef();
        this.b = React.createRef();
        this.c = React.createRef();

        this.reLoad = () => {
          this._reLoad();
        }
      
  }
  
  state = {
    emailBox: new Animated.Value(80),
    passBox: new Animated.Value(90),
    confirmBox: new Animated.Value(100),
    emailBoxOpacity: new Animated.Value(1),
    passBoxOpacity: new Animated.Value(1),
    confirmOpacity: new Animated.Value(1),
    passBoxWidth:new Animated.Value(deviceWidth - 60),
    confirmBoxWidth:new Animated.Value(deviceWidth - 70),
    passBoxPos:new Animated.Value(5),
    confirmBoxPos:new Animated.Value(10),
    passBoxColor:this.props.colorSet[1],
    confirmBoxColor:this.props.colorSet[2],
    confirmBtnColor:this.props.colorSet[3],
    BBRR:new Animated.Value(0),
    BBLR:new Animated.Value(0),
    singUpBoxW:new Animated.Value(deviceWidth - 50),
    singUpBoxH:new Animated.Value(90),
    formH:new Animated.Value(170),
    titleTxtShow: true,
    noteTxtShow: true,
    ActivityIndicatorShow:false,
    email:null,
    pass:null,
    confirm:null
  }


  singUpBoxIn(){
    Animated.parallel([
      Animated.timing(this.state.formH, {
            toValue:170,
            duration: 200
        }),
      Animated.timing(this.state.singUpBoxW, {
          toValue:deviceWidth - 50,
          duration: 200
      }),
      Animated.timing(this.state.singUpBoxH, {
        toValue:90,
        duration: 200
      }),
      Animated.timing(this.state.confirmOpacity, {
        toValue:1,
        duration: 200
      })

    ]).start(() => {
      
    }); 
  }

  _reLoad(){
    this.setState({
      BBRR:new Animated.Value(0),
      BBLR:new Animated.Value(0),
      titleTxtShow: true,
      noteTxtShow: true,
      ActivityIndicatorShow:false,
      email:null,
      pass:null,
      confirm:null,
      emailBoxOpacity: new Animated.Value(1),
      emailBox: new Animated.Value(80),
      passBoxColor:this.props.colorSet[1],
      passBoxOpacity: new Animated.Value(1),
      passBox: new Animated.Value(90),
      passBoxWidth:new Animated.Value(deviceWidth - 60),
      passBoxPos:new Animated.Value(5),
      confirmBoxColor:this.props.colorSet[2],
      confirmBox: new Animated.Value(100),
      confirmBoxWidth:new Animated.Value(deviceWidth - 70),
      confirmBoxPos:new Animated.Value(10),
      confirmBtnColor:this.props.colorSet[3],
    });
    this.singUpBoxIn();
  }

  onSubmit(){
    var data = {email:this.state.email, password:this.state.pass ,passwordConfirm:this.state.confirm}
    this.props.onSubmit(data);
  }

  emailBoxOff() {
    this.setState({passBoxColor:"#f5f5f5"})
    Animated.parallel([
      Animated.timing(this.state.emailBox, {
            toValue:0,
            duration: 800
        }),
        Animated.timing(this.state.emailBoxOpacity, {
          toValue: 0,
          duration: 800
          
        }),
        Animated.timing(this.state.passBoxWidth, {
          toValue: deviceWidth - 50,
          duration: 600
        }),
        Animated.timing(this.state.passBoxPos, {
          toValue: 0,
          duration: 600
        }),
        Animated.timing(this.state.passBox, {
          toValue: 80,
          duration: 600
        })
        
    ]).start(() => {
      
    });  
  }

  passBoxOff() {
    this.setState({confirmBoxColor:"#f5f5f5", confirmBtnColor:"#80B4E1"})
    
    Animated.parallel([
      Animated.timing(this.state.passBox, {
            toValue:0,
            duration: 500
        }),
        Animated.timing(this.state.passBoxOpacity, {
          toValue: 0,
          duration: 600
        }),
        Animated.timing(this.state.confirmBoxWidth, {
          toValue: deviceWidth - 50,
          duration: 400
        }),
        Animated.timing(this.state.confirmBoxPos, {
          toValue: 0,
          duration: 400
        }),
        Animated.timing(this.state.confirmBox, {
          toValue: 80,
          duration: 400
        })
        
    ]).start(() => {
       
    });  
  }

  confrmBoxOff() {
    this.setState({titleTxtShow:false,noteTxtShow:false, ActivityIndicatorShow:true})
    Animated.parallel([
      Animated.timing(this.state.confirmBox, {
            toValue:0,
            duration: 200
        }),
        Animated.timing(this.state.confirmOpacity, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(this.state.confirmBoxWidth, {
          toValue: 0,
          duration: 400
        }),
        Animated.timing(this.state.BBLR, {
          toValue: 15,
          duration: 500
        }),
        Animated.timing(this.state.BBRR, {
          toValue: 15,
          duration: 500
        }),
        Animated.timing(this.state.singUpBoxW, {
          toValue:30,
          duration: 500
        }),
        Animated.timing(this.state.singUpBoxH, {
          toValue: 30,
          duration: 500
        }),
        Animated.timing(this.state.formH, {
          toValue: 30,
          duration: 500
        })
        
        
    ]).start(() => {
    
      this.onSubmit();
      
       
    });  
  }
  
  render() {
    return (
   
     
    
    <Animated.View style={[styles.form,{height:this.state.formH}]}>
{/* SING IN BOX */}
        <Animated.View style={{
        width:this.state.singUpBoxW, 
        height:this.state.singUpBoxH,
        zIndex:5,
        backgroundColor:this.props.colorSet[0],
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomLeftRadius:this.state.BBLR,
        borderBottomRightRadius:this.state.BBRR,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        justifyContent:this.state.ActivityIndicatorShow ? "center" : "", 
        alignItems: this.state.ActivityIndicatorShow ? "center" : ""
        
        }}>
              <Animated.Text style={[this.props.titleStyle,{display:this.state.titleTxtShow ? "flex" : "none"}]}>{this.props.titleTxt}</Animated.Text>
              <Animated.Text style={[this.props.noteStyle, {display:this.state.noteTxtShow ? "flex" : "none"}]}>{this.props.noteTxt}</Animated.Text>
              <ActivityIndicator color={this.props.spinnerColor} style={{display:this.state.ActivityIndicatorShow ? "flex" : "none"}} />

             
        </Animated.View>
        
{/* END SING IN BOX */}

{/* EMAIL BOX */}
        <Animated.View style={{
                flex:1,width: deviceWidth - 50, 
                justifyContent: 'center', 
                alignItems: 'center',
                position:'absolute',
                backgroundColor:'#f5f5f5',
                borderBottomLeftRadius:15,
                borderBottomRightRadius:15,
                height:65,
                opacity: this.state.emailBoxOpacity,
                top:this.state.emailBox,
                left:0,
                zIndex:3}}>
                  <Animated.View style={{flex:1, flexDirection:'row'}}>
                    <Animated.View style={{flex:4,justifyContent: 'center', alignItems: 'center',}}>
                      <TextInput
                        //autoFocus={true}
                        ref={this.a}
                        onSubmitEditing={() => {
                          this.emailBoxOff();
                          this.b.current.focus()
                        }}

                        style={this.props.inputTextStyle}
                        placeholder={this.props.placeHolders[0]}
                        placeholderTextColor="#80B4E1"
                        onChangeText={(text) => this.setState({email:text})}
                        value={this.state.email}
                      />
                    </Animated.View>

                  {/*  <Animated.View style={{flex:1,  justifyContent: 'center', alignItems: 'center', backgroundColor:'#80B4E1', borderBottomRightRadius:15, }}>
                      
                      <TouchableOpacity style={styles.goBtn} onPress={()=>{
                        this.emailBoxOff(); }}>
                        <Text style={styles.goTxt}>GO</Text>
                      </TouchableOpacity>
                    
                    </Animated.View> */}
                  </Animated.View>
            </Animated.View>
{/* END EMAIL BOX */}

{/* PASSWORD  BOX */}
        <Animated.View style={{
                flex:1, 
                width:this.state.passBoxWidth, 
                justifyContent: 'center', 
                alignItems: 'center', 
                position:'absolute',
                backgroundColor:this.state.passBoxColor, 
                borderBottomLeftRadius:15, 
                borderBottomRightRadius:15, 
                height:65, 
                opacity:this.state.passBoxOpacity,
                top:this.state.passBox, 
                left:this.state.passBoxPos,
                zIndex:2}}> 
                    <Animated.View style={{ flex:1, flexDirection:'row'}}>
                            <Animated.View style={{ flex:4,justifyContent: 'center', alignItems: 'center'}}>
                            <TextInput
                                ref={this.b}
                                onSubmitEditing={() => {

                                  this.passBoxOff();
                                  this.c.current.focus();
                                }}
                                secureTextEntry={true}
                                style={this.props.inputTextStyle}
                                placeholder={this.props.placeHolders[1]}
                                placeholderTextColor="#80B4E1"
                                onChangeText={(text) => this.setState({pass:text})}
                                value={this.state.pass}
                            />
                            </Animated.View>

                            {/*<Animated.View style={{flex:1,  justifyContent: 'center', alignItems: 'center', backgroundColor:this.state.passBtnColor, borderBottomRightRadius:15, }}>
                            
                            <TouchableOpacity style={styles.goBtn} onPress={()=>{
                                this.passBoxOff(); }}>
                                <Text style={styles.goTxt}>GO</Text>
                            </TouchableOpacity>
                            
                            </Animated.View>*/}
                    </Animated.View> 
        </Animated.View>
{/* END PASSWORD  BOX */}

{/* CONFIRM PASSWORD BOX */}
        <Animated.View style={{
            flex:1, 
            width:this.state.confirmBoxWidth, 
            justifyContent: 'center', 
            alignItems: 'center',
            position:'absolute',
            backgroundColor:this.state.confirmBoxColor,
            borderBottomLeftRadius:15,
            borderBottomRightRadius:15,
            height:65,
            opacity:this.state.confirmOpacity,
            top:this.state.confirmBox,
            left:this.state.confirmBoxPos,
            zIndex:1}}>
            <Animated.View style={{flex:1, flexDirection:'row'}}>
                    <Animated.View style={{flex:4,justifyContent: 'center', alignItems: 'center',}}>
                      <TextInput
                        ref={this.c}
                        
                        secureTextEntry={true}
                        style={this.props.inputTextStyle}
                        placeholder={this.props.placeHolders[2]}
                        placeholderTextColor="#80B4E1"
                        onChangeText={(text) => this.setState({confirm:text})}
                        value={this.state.confirm}
                      />
                    </Animated.View>

                    <Animated.View style={{flex:1,  justifyContent: 'center', alignItems: 'center', backgroundColor:this.state.confirmBtnColor, borderBottomRightRadius:15, }}>
                      
                      <TouchableOpacity style={styles.goBtn} onPress={()=>{
                        //this.onEnd(1); 
                        this.confrmBoxOff();
                        }}>
                        <Text style={styles.goTxt}>{this.props.buttomText}</Text>
                      </TouchableOpacity>
                    
                    </Animated.View>


                  </Animated.View>    
        </Animated.View>
{/* END CONFIRM PASSWORD BOX */}


  </Animated.View>      
 

    
   
    );
  }
}

const styles = StyleSheet.create({
  goBtn:{
    flex:1, 
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:10,
  },
  goTxt:{
      color:'#FFF'
  }


 
});
