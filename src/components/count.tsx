'use client';

import CountUp, { CountUpProps } from 'react-countup';

interface CountProps extends CountUpProps {}
const Count = (props: CountProps) => <CountUp {...props} />;

export default Count;