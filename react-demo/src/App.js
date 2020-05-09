import React from 'react';
import logo from './logo.svg';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import diagramXML from './newDiagram.bpmn';
import './App.css';
// import { Upload } from '@hupu/rc-basic'
import { Upload } from '@hupu/diana-ui';
import { Monitor, Observer } from '@hupu/monitor-react';

let modeler
function commandStack (e) {
  // user modeled something or
  // performed an undo/redo operation
  console.log('commandStack changed')
}

function elementChanged (e) {
  // user modeled something or
  // performed an undo/redo operation
  console.log('element changed', e.element)
}

function createDiagram() {
  modeler = new BpmnModeler({
  container: '#js-canvas'
});

  modeler.importXML(`<?xml version="1.0" encoding="UTF-8"?>
  <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">
    <bpmn2:process id="Process_1" isExecutable="false">
      <bpmn2:startEvent id="StartEvent_1"/>
    </bpmn2:process>
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
      <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
        <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
          <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>
        </bpmndi:BPMNShape>
      </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
  </bpmn2:definitions>`, function(err) {
  if (err) {
    console.error(err)
  } else {
    
  }
});

  modeler.on('commandStack.changed', commandStack);
  modeler.on('element.changed', elementChanged);
}

function unmount () {
  modeler.off('commandStack.changed', commandStack);
  modeler.off('element.changed', elementChanged);
}

const errDomType = ['img', 'script'];
const onError = (dom, e) => console.info('occur error : ', dom, e);
const onChange = (source) => {
  const DIV = document.getElementById('root-observer-test')
  const IMG = document.getElementById('root-observer-test-img')
  const newSrc = 'https://b3.hoopchina.com.cn/images/www_jubao.jpg'
  if (IMG.src !== newSrc) {
    setTimeout(() => {
      IMG.src = newSrc
      const SCRIPT = document.createElement('script')
      SCRIPT.src = 'http://localhost/error.js'
      DIV.appendChild(SCRIPT)
    }, 2000)
  }
  console.info('the observation change: ', source)
}
console.log(12323, diagramXML)
function App() {
  React.useEffect(() => {
    createDiagram()

    return unmount;
  }, [])
  return (
    <Monitor
      report={data => console.info('report data is', data)}
    >
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button style={{ position: 'relative' }}>
            点我上传
            <Upload action='http://upload'/>
          </button>
        </header> */}
        <div id='js-canvas' />
      </div>
      <Observer
        errDomType={errDomType}
        onError={onError}
        onChange={onChange}
      >
        <div id='root-observer-test'>
          <h2>Observer Section</h2>
          <h3>The Section is Under Observation by Observer</h3>
          <img id='root-observer-test-img' src='https://b3.hoopchina.com.cn/images/logo2017/v1/hp_logo_sports.png' />
          <script id='root-observer-test-script' src='https://w1.hoopchina.com.cn/ad_pc/js/ad_pc_load.js'></script>
        </div>
      </Observer>
    </Monitor>
  );
}

export default App;
