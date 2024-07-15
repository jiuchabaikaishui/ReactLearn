import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SingleCom from './SingleCom'

const title = React.createElement('p', null, 'hello, world!')
ReactDOM.createRoot(document.getElementById('root')).render(title)

const hiJSX = <p>hello JSX!</p>
ReactDOM.createRoot(document.getElementById('hiJSX')).render(hiJSX)

const note = (
  <div className='note' />
)
ReactDOM.createRoot(document.getElementById('note')).render(note)

const sayHi = () => {
  return 'hello, JSX'
}
const expression = (
  <div>
    <p>{1}</p>
    <p>{'a'}</p>
    <p>{1 + 7}</p>
    <p>1 大于 2 吗？{1 > 2 ? '大于' : '小于或等于'}</p>
    <p>{sayHi()}</p>
    {/* 错误示例 */}
    {/* <p>{{ a: 'a' }}</p> */}
    {/* <p>{if (true) {}}</p> */}
    {/* <p>{for (var i = 0; i < 8; i++) {}}</p> */}
  </div>
)
ReactDOM.createRoot(document.getElementById('expression')).render(expression)

var flag = true
// if-else
const load = () => {
  if (flag) {
    return <p>loading……</p>
  } else {
    return <p>加载完成</p>
  }
}
// 三元表达式
const load1 = () => {
  return flag ? <p>loading……</p> : <p>加载完成</p>
}
// 逻辑与运算符
const load2 = () => {
  return flag && <p>loading……</p>
}
const condition = (
  <div>
    if-else 条件语句：
    {load()}
    三元表达式：
    {load1()}
    逻辑与运算符：
    {load2()}
  </div>
)
ReactDOM.createRoot(document.getElementById('condition')).render(condition)

const data = [
  { id: 0, name: 'one' }, 
  { id: 1, name: 'two' }, 
  { id: 2, name: 'three' }, 
  { id: 3, name: 'four' }
]
const ul = (
  <ul>
    {data.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
)
ReactDOM.createRoot(document.getElementById('list')).render(ul)

const lineStyle = (
  <div style={{ backgroundColor: 'red', width: '100px', height: '100px'}}></div>
)
ReactDOM.createRoot(document.getElementById('lineStyle')).render(lineStyle)

const className = (
  <div className='green'></div>
)
ReactDOM.createRoot(document.getElementById('className')).render(className)

// 渲染结构的函数组件
function FuncComOne() {
  return (
    <div>渲染结构的函数组件</div>
  )
}
ReactDOM.createRoot(document.getElementById('funcOne')).render(<FuncComOne></FuncComOne>)

// 不渲染结构的函数组件
function FuncComTwo() {
  return null
}
ReactDOM.createRoot(document.getElementById('funcTwo')).render(<FuncComTwo></FuncComTwo>)

// 使用箭头函数
const FuncComThree = () => <div>使用箭头函数创建渲染结构的函数组件</div>
ReactDOM.createRoot(document.getElementById('funcThree')).render(<FuncComThree></FuncComThree>)

// 使用类创建组件
class ClassCom extends React.Component {
  render() {
    return (
      <div>渲染结构的类组件</div>
    )
  }
}
ReactDOM.createRoot(document.getElementById('classCom')).render(<ClassCom></ClassCom>)

// 把组件抽离为独立 JS 文件
ReactDOM.createRoot(document.getElementById('singleCom')).render(<SingleCom></SingleCom>)

// 函数组件事件处理
function FuncComEvent() {
  function clickHandle(e) {
    e.preventDefault()
    console.log('点我干嘛');
  }
  return (
    <a href='https://www.baidu.cn/' onClick={clickHandle}>点我</a>
  )
}
ReactDOM.createRoot(document.getElementById('funcComEvent')).render(<FuncComEvent></FuncComEvent>)

// 类组件事件处理
class ClassComEvent extends React.Component {
  clickHandle(e) {
    e.preventDefault()
    console.log('点我干嘛');
  }
  render() {
    return (
      <a href='https://www.baidu.cn/' onClick={this.clickHandle}>点我</a>
    )
  }
}
ReactDOM.createRoot(document.getElementById('classComEvent')).render(<ClassComEvent></ClassComEvent>)

class StateCom extends React.Component {
  // 构造方法
  // constructor() {
  //   super()

  //   this.state = {
  //     count: 0
  //   }
  // }

  // 简写，不使用构造方法
  state = {
    count: 0
  }
  // 事件处理程序
  onDecrease() {
    // this 为 undefined
    this.setState({ count: this.state.count -1 })
  }
  render() {
    // render 方法 this 为组件实例
    return (
      <div>
        <p>数据结果：{this.state.count}</p>
        <button onClick={() => {
          // 箭头函数 this 为定义时的 this 即为组件实例

          // 修改 state
          this.setState({ count: this.state.count + 1 })

          // 错误修改 state 的方法
          // this.state.count++
        }}>+1</button>

        {/* 从 JSX 中抽离事件处理程序 */}
        <button onClick={this.onDecrease}>-1</button>
      </div>
    )
  }
}
ReactDOM.createRoot(document.getElementById('stateCom')).render(<StateCom></StateCom>)

// 处理 事件中 this 指向
class EventThis extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    // 2、事件绑定 this 指向
    this.onIncreaceTwo = this.onIncreaceTwo.bind(this)
  }
  onIncreaceOne() {
    this.setState({ count: this.state.count + 1 })
  }
  onIncreaceTwo() {
    this.setState({ count: this.state.count + 2 })
  }
  // 3、class 的实例方法
  onIncreaceThree = () => {
    this.setState({ count: this.state.count + 3 })
  }
  render() {
    return (
      <div>
        <p>结果：{this.state.count}</p>
        {/* 1、通过箭头函数 */}
        <button onClick={() => this.onIncreaceOne()}>+1</button>
        <button onClick={this.onIncreaceTwo}>+2</button>
        <button onClick={this.onIncreaceThree}>+3</button>
      </div>
    )
  }
}
ReactDOM.createRoot(document.getElementById('eventThis')).render(<EventThis></EventThis>)

// 受控组件
class ControlCom extends React.Component {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
      city: 'bj',
      isChecked: true
    }
  }

  // 处理 文本框、富文本框、下拉框、复选框 的变化
  titleChange = e => this.setState({ title: e.target.value })
  contentChange = e => this.setState({ content: e.target.value })
  cityChange = e => this.setState({ city: e.target.value })
  isCheckedChange = e => this.setState({ isChecked: e.target.checked })

  valueChage = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({ [e.target.name]: value })
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='请输入标题' value={this.state.title} onChange={this.titleChange}></input>
        <br/>
        <textarea placeholder='请输入内容' value={this.state.content} onChange={this.contentChange}></textarea>
        <br/>
        <select value={this.state.city} onChange={this.cityChange}>
          <option value='bj'>北京</option>
          <option value='sh'>上海</option>
          <option value='sz'>深圳</option>
          <option value='gz'>广州</option>
        </select>
        <br/>
        <input type='checkbox' checked={this.state.isChecked} onChange={this.isCheckedChange}></input>

        <p>优化受控组件</p>
        <input name='title' type='text' placeholder='请输入标题' value={this.state.title} onChange={this.valueChage}></input>
        <br/>
        <textarea name='content' placeholder='请输入内容' value={this.state.content} onChange={this.valueChage}></textarea>
        <br/>
        <select name='city' value={this.state.city} onChange={this.valueChage}>
          <option value='bj'>北京</option>
          <option value='sh'>上海</option>
          <option value='sz'>深圳</option>
          <option value='gz'>广州</option>
        </select>
        <br/>
        <input name='isChecked' type='checkbox' checked={this.state.isChecked} onChange={this.valueChage}></input>
      </div>
    )
  }
}
ReactDOM.createRoot(document.getElementById('controlCom')).render(<ControlCom></ControlCom>)

// 非受控组件
class UncontrolCom extends React.Component {
  constructor() {
    super()

    // 1、调用 React.createRef() 方法创建一个 ref 对象
    this.textRef = React.createRef()
  }
  render() {
    return (
      <div>
        {/* 2、将创建好的 ref 对象添加到文本框中 */}
        <input type='text' ref={this.textRef}></input>
        <button onClick={this.getText}>获取文本</button>
      </div>
    )
  }
  // 3、 通过 ref 对象获取到文本框的值
  getText= () => {
    console.log('text: ', this.textRef.current.value);
  }
}
ReactDOM.createRoot(document.getElementById('uncontrolCom')).render(<UncontrolCom></UncontrolCom>)

class Comment extends React.Component {
  // 初始化状态
  state = {
    count: 10,
    comments: [
      { id: 1, name: 'jack', content: '沙发！！！' },
      { id: 2, name: 'rose', content: '板凳~' },
      { id: 3, name: 'tom', content: '楼主好人' }
    ],
    userName: '',
    userContent: ''
  }
  // 渲染评论列表：
  renderList() {
    const { comments } = this.state
    if (comments.length === 0) {
      return <div className='no-comment'>暂无评论，快去评论吧</div>
    }
    return comments.map(item => (
      <li key={item.id}>
        <h4>评论人：{item.name}</h4>
        <p>评论内容：{item.content}</p>
      </li>
    ))
  }
  // 处理表单元素
  formHandle = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  // 添加评论
  addComment = () => {
    const { userName, userContent } = this.state
    if (userName.trim() === '' || userContent.trim() === '') {
      alert('请输入评论人和评论内容！')
      return
    }
    const newComments = [{
      id: Math.random(),
      name: userName,
      content: userContent
    }, ...this.state.comments]
    this.setState({ 
      comments: newComments,
      userName: '',
      userContent: ''
     })
  }
  render () {
    const { userName, userContent } = this.state
    return (
      <div className='comment'>
        <div>
          <input className='user' type='text' placeholder='请输入评论人' value={userName} name='userName' onChange={this.formHandle}></input>
          <br />
          <textarea className='content' cols='30' rows='10' placeholder='请输入评论内容' value={userContent} name='userContent' onChange={this.formHandle}></textarea>
          <br />
          <button onClick={this.addComment}>发表评论</button>
          {this.renderList()}
        </div>
      </div>
    )
  }
}
ReactDOM.createRoot(document.getElementById('comment')).render(<Comment></Comment>)