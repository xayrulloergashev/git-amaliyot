import React, {useState} from 'react';
import {CloseSquareFilled} from '@ant-design/icons';
import {AutoComplete} from 'antd';
const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});
const Inp = () => {
    const [options, setOptions] = useState([]);
    const getPanelValue = searchText =>
        !searchText
            ? []
            : [
                  mockVal(searchText),
                  mockVal(searchText, 2),
                  mockVal(searchText, 3),
              ];
    return (
        <div
            style={{
                marginBottom: '50px',
            }}>
            <AutoComplete
                options={options}
                style={{
                    width: 200,
                }}
                onSearch={text => setOptions(getPanelValue(text))}
                placeholder='UnClearable'
                allowClear={false}
            />
            <br />
            <br />
            <AutoComplete
                options={options}
                style={{
                    width: 200,
                }}
                onSearch={text => setOptions(getPanelValue(text))}
                placeholder='Customized clear icon'
                allowClear={{
                    clearIcon: <CloseSquareFilled />,
                }}
            />
        </div>
    );
};
export default Inp;
