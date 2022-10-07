import React from "react";
import './Example.scss';

export default function Example() {
  return (
    <div>
      <p>Example</p>
      <p className="font">Example</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a>456</a>
          </li>
        </ul>
      </nav>
      <p className="base">Hello</p>
      <p className="inverse">Hello</p>
      <p className="info">Hello</p>
      <p className="alert">Hello</p>
      <p className="success">Hello</p>
      <p className="nessage">nessage</p>
      <p className="success2">success2</p>
      <p className="error">error</p>
      <p className="warning">warning</p>
      <div className="square-av">square</div>
      <div className="circle-av">circle</div>
      <div className="sidebar">sidebar</div>
      <div className="gray">gray</div>
      <div className="button">button</div>
      <div className="pulse">pulse</div>
    </div>
  );
}
