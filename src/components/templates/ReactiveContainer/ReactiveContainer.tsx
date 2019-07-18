import * as React from "react";
import IframesContainer from '../../layout/IframesContainer/IframesContainer';
import AddBlock from '../../molecules/AddBlock/AddBlock';


export default class ReactiveContainer extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            devices: this.props.devices,
            link : "",
            Iframes : []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.removeBlock = this.removeBlock.bind(this);
        this.flipPropsFn = this.flipPropsFn.bind(this);
    }

    handleAdd(pr:any, pw: any, ph:any, w:any,h:any,n:any) {
        const timeStamp = Math.floor(Date.now() / 1000);
        const newBlock = {
            "name": n,
            "width": w,
            "height": h,
            "pwidth": pw,
            "pheight": ph,
            "pixratio": pr,
            "keyid": timeStamp
        }
        this.setState((prevState: any) => ({
            Iframes: [...prevState.Iframes, newBlock]
        }));
    }
    handleLink(link:any) {
        this.setState({
            link: link
        });
    }
    flipPropsFn(id:any) {
        const index = this.state.Iframes.findIndex((x: any) => x.keyid ===id);
        const newItem = {
            ...this.state.Iframes[index],
            "width" : this.state.Iframes[index].height,
            "height" : this.state.Iframes[index].width
        }
        this.setState((prevState: any) => ({
            Iframes: [...prevState.Iframes.slice(0,index), newItem, ...prevState.Iframes.slice(index+1)]
        }));
    }
    removeBlock(blockID: any) {
        // this.setState({
        //     Iframes: this.state.Iframes.filter((_: any, i: any) => i !== blockNr)
        // });
        const index = this.state.Iframes.findIndex((x: any) => x.keyid ===blockID);
        this.setState((prevState: any) => ({
          Iframes: [...prevState.Iframes.slice(0,index), ...prevState.Iframes.slice(index+1)]
        }));
    }
    componentDidUpdate() {
        localStorage.setItem('IframeStorage', JSON.stringify(this.state.Iframes));
        localStorage.setItem('link', this.state.link);
    }
    componentDidMount() {
        const defaultViews = [
            {
                "name" : "Laptop",
                "pheight" : 900,
                "pwidth" : 1440,
                "pixratio" : 1,
                "ppi" : 100,
                "cssppi": 100,
                "width" : "1440",
                "height" : "900",
                "keyid" : 11
            },
            {
                "name" : "Tablet",
                "pheight" : 1024,
                "pwidth" : 768,
                "pixratio" : 1,
                "ppi" : 100,
                "cssppi": 100,
                "width" : "768",
                "height" : "1024",
                "keyid" : 22
            },
            {
                "name" : "Mobile",
                "pheight" : 667,
                "pwidth" : 375,
                "pixratio" : 1,
                "ppi" : 100,
                "cssppi": 100,
                "width" : "375",
                "height" : "667",
                "keyid" : 33
            }
        ];
        const storageCheck = localStorage.getItem("IframeStorage") || '';
        const linkcheck = localStorage.getItem("link") || '';
        const IframeStorage = storageCheck.length > 0 ? JSON.parse(storageCheck) : defaultViews;
        const linkStorage = linkcheck.length > 0 ? linkcheck : '';
        this.setState({ Iframes: IframeStorage, link: linkStorage });
    }
    public render() {
        return (
            <div className="container">
                <AddBlock devices={this.state.devices} addBlock={this.handleAdd} changeLink={this.handleLink}/>
                <IframesContainer flipPropsFn={this.flipPropsFn} removeBlock={this.removeBlock} link={this.state.link} Iframes={this.state.Iframes} />
            </div>
        );
    }
}