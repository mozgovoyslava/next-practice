import React from 'react';

const SvgrMock = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} />;

export default SvgrMock;
export const ReactComponent = SvgrMock;
