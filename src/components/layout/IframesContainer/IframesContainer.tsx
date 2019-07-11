import * as React from "react";
import Iframe from "../../cells/Iframe/Iframe";


export default class IframesContainer extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
        	Iframes : this.props.Iframes,
            link : this.props.link,
            removeBlock: this.props.removeBlock
        };
    }
    public render() {
        console.log('inframesCont state link',this.state.link);
        console.log('inframesCont props link',this.props.link);
        return (
            <>
                <div className="grid-4 iframecont">
                    {
                        this.props.Iframes.map((item: any, i:any) => {
                            return <Iframe removeBlock={this.state.removeBlock} key={i} id={i} link={this.props.link} Iwidth={parseInt(item.width)} name={item.name} Iheight={parseInt(item.height)} />
                        })
                    }
                </div>
            </>
        );
    }
}