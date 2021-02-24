import React from 'react';
import Select, {Component} from 'react-select'
import { act } from 'react-dom/test-utils'
import { render,screen,fireEvent,cleanup,getByText,renderIntoDocument } from '@testing-library/react';
import CommomComponent from './components/CommonComponent';


describe('CommonComponent', () => {

    it("renders Component", () => {

        act(() => {
            ReactDOM.render(<CommomComponent />, container);
          });

        const select = container.find('.Select');
        
        TestUtils.Simulate.focus(select.find('input'));
        
        TestUtils.Simulate.keyDown(select.find('.Select-control'), { keyCode: 40, key: 'ArrowDown' });
        TestUtils.Simulate.keyDown(select.find('.Select-control'), { keyCode: 13, key: 'Enter' });

    });
});