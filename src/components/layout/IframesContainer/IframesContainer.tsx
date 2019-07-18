import * as React from "react";
import Iframe from "../../cells/Iframe/Iframe";


export default class IframesContainer extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            Iframes : this.props.Iframes,
            link : this.props.link,
            removeBlock: this.props.removeBlock,
            flipPropsFn: this.props.flipPropsFn
        };
    }
    public render() {
        return (
            <>
                <div className="grid-4 iframecont">
                    {
                        this.props.Iframes.map((item: any, i:any) => {
                            return <Iframe flipPropsFn={this.state.flipPropsFn} removeBlock={this.state.removeBlock} key={item.keyid} id={item.keyid} link={this.props.link} Iwidth={parseInt(item.width)} name={item.name} Iheight={parseInt(item.height)} Pwidth={parseInt(item.pwidth)} Pheight={parseInt(item.pheight)} pixratio={item.pixratio}/>
                        })
                    }
                </div>
            </>
        );
    }
}