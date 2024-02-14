import {FastBackwardOutlined} from '@ant-design/icons';
import {Divider, Typography} from 'antd';
import React from 'react';

const {Title} = Typography;
const Test1 = () => {
    return (
        <div>
            <FastBackwardOutlined />
            <Title
                level={5}
                //  type='warning'
                // code
                delete>
                Test ant
            </Title>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
            </p>
            <Divider plain>Text</Divider>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
            </p>
            <Divider orientation='left' plain>
                Left Text
            </Divider>
        </div>
    );
};

export default Test1;
