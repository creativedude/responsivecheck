import * as React from "react";
import IframesContainer from '../../layout/IframesContainer/IframesContainer';
import AddBlock from '../../molecules/AddBlock/AddBlock';


export default class ReactiveContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            devices: this.props.devices,
            link: "",
            Iframes: [],
            Iframesa: [],
            Iframesb: [],
            Iframesc: [],
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.removeBlock = this.removeBlock.bind(this);
        this.flipPropsFn = this.flipPropsFn.bind(this);
    }
    //@ts-ignore

    handleAdd(pr: any, pw: any, ph: any, w: any, h: any, n: any) {
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
    handleLink(link: any) {
        this.setState({
            link: link
        });
    }
    flipPropsFn(id: any) {
        const index = this.state.Iframes.findIndex((x: any) => x.keyid === id);
        console.log('thisState: ', this.state )
        console.log('thisIndex: ', index )
        console.log('thisID: ', id )
        console.log('thisItem: ', this.state.Iframes[index] )
        const newItem = {
            ...this.state.Iframes[index],
            "width": this.state.Iframes[index].height,
            "height": this.state.Iframes[index].width
        }
        this.setState((prevState: any) => ({
            Iframes: [...prevState.Iframes.slice(0, index), newItem, ...prevState.Iframes.slice(index + 1)]
        }));
    }
    flipPropsFna(id: any) {
        console.log('state',this.state)
        const index = this.state.Iframesa.findIndex((x: any) => x.keyid === id);
        const newItem = {
            ...this.state.Iframesa[index],
            "width": this.state.Iframesa[index].height,
            "height": this.state.Iframesa[index].width
        }
        this.setState((prevState: any) => ({
            Iframesa: [...prevState.Iframesa.slice(0, index), newItem, ...prevState.Iframesa.slice(index + 1)]
        }));
    }
    flipPropsFnb(id: any) {
        const index = this.state.Iframesb.findIndex((x: any) => x.keyid === id);
        const newItem = {
            ...this.state.Iframesb[index],
            "width": this.state.Iframesb[index].height,
            "height": this.state.Iframesb[index].width
        }
        this.setState((prevState: any) => ({
            Iframesb: [...prevState.Iframesb.slice(0, index), newItem, ...prevState.Iframesb.slice(index + 1)]
        }));
    }
    flipPropsFnc(id: any) {
        const index = this.state.Iframesc.findIndex((x: any) => x.keyid === id);
        const newItem = {
            ...this.state.Iframesc[index],
            "width": this.state.Iframesc[index].height,
            "height": this.state.Iframesc[index].width
        }
        this.setState((prevState: any) => ({
            Iframesc: [...prevState.Iframes.slice(0, index), newItem, ...prevState.Iframes.slice(index + 1)]
        }));
    }
    removeBlock(blockID: any) {
        // this.setState({
        //     Iframes: this.state.Iframes.filter((_: any, i: any) => i !== blockNr)
        // });
        const index = this.state.Iframes.findIndex((x: any) => x.keyid === blockID);
        this.setState((prevState: any) => ({
            Iframes: [...prevState.Iframes.slice(0, index), ...prevState.Iframes.slice(index + 1)]
        }));
    }
    componentDidUpdate() {
        localStorage.setItem('IframeStorage', JSON.stringify(this.state.Iframes));
        localStorage.setItem('link', this.state.link);
    }
    componentDidMount() {
        const oldDefaultViews = [
            {
                "name" : "a",
                "pheight" : 1080,
                "pwidth" : 1920,
                "pixratio" : 1,
                "ppi" : 100,
                "cssppi": 100,
                "width" : "1920",
                "height" : "1080",
                "keyid" : 1
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
                "keyid" : 2
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
                "keyid" : 3
            }
        ];

        const standardViews = [
            {
                "name": "standard 1920 1080",
                "pwidth": 1920,
                "pheight": 1080,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1920,
                "height": 1080,
                "keyid": 10
            },
            {
                "name": "standard 1366 768",
                "pwidth": 1366,
                "pheight": 768,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1366,
                "height": 768,
                "keyid": 11
            },
            {
                "name": "standard 1440 900",
                "pwidth": 1440,
                "pheight": 900,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1440,
                "height": 900,
                "keyid": 12
            },
            {
                "name": "standard 1536 864",
                "pwidth": 1536,
                "pheight": 864,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1536,
                "height": 864,
                "keyid": 13
            },
            {
                "name": "standard 2560 1440",
                "pwidth": 2560,
                "pheight": 1440,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 2560,
                "height": 1440,
                "keyid": 14
            },
            {
                "name": "standard 1680 1050",
                "pwidth": 1680,
                "pheight": 1050,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1680,
                "height": 1050,
                "keyid": 15
            },
            {
                "name": "standard 1280 720",
                "pwidth": 1280,
                "pheight": 720,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1280,
                "height": 720,
                "keyid": 16
            },
            {
                "name": "standard 1280 800",
                "pwidth": 1280,
                "pheight": 800,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1280,
                "height": 800,
                "keyid": 17
            },
            {
                "name": "standard 1792 1120",
                "pwidth": 1792,
                "pheight": 1120,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1792,
                "height": 1120,
                "keyid": 18
            },
            {
                "name": "standard 1600 900",
                "pwidth": 1600,
                "pheight": 900,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1600,
                "height": 900,
                "keyid": 19
            },
        ];


        const problemViews = [
            {
                "name": "problem 1440 821",
                "pwidth": 1440,
                "pheight": 821,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1440,
                "height": 821,
                "keyid": 20
            },
            {

                "name": "problem 1614 797",
                "pwidth": 1614,
                "pheight": 797,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1614,
                "height": 797,
                "keyid": 21
            },
            {

                "name": "problem 2736 1824",
                "pwidth": 2736,
                "pheight": 1824,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 2736,
                "height": 1824,
                "keyid": 22
            },
            {

                "name": "problem 1680 771",
                "pwidth": 1680,
                "pheight": 771,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1680,
                "height": 771,
                "keyid": 23
            },
            {

                "name": "problem 1550 851",
                "pwidth": 1550,
                "pheight": 851,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1550,
                "height": 851,
                "keyid": 24
            },
            {

                "name": "problem 1536 739",
                "pwidth": 1536,
                "pheight": 739,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1536,
                "height": 739,
                "keyid": 25
            },
            {

                "name": "problem 1302 540",
                "pwidth": 1302,
                "pheight": 540,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1302,
                "height": 540,
                "keyid": 26
            },
            {

                "name": "problem 1318 652",
                "pwidth": 1318,
                "pheight": 652,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 1318,
                "height": 652,
                "keyid": 27
            },
            {

                "name": "problem 375 553",
                "pwidth": 375,
                "pheight": 553,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": 375,
                "height": 553,
                "keyid": 28
            }
        ];

        const mobileViews = [

            {
                "name": "mobile: 360 640",
                "pwidth": 360,
                "pheight": 640,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": "360",
                "height": "640",
                "keyid": 30
            },
            {
                "name": "mobile: 414 896",
                "pwidth": 414,
                "pheight": 896,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": "414",
                "height": "896",
                "keyid": 31
            },
            {
                "name": "mobile: 360 800",
                "pwidth": 360,
                "pheight": 800,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": "360",
                "height": "800",
                "keyid": 32
            },
            {
                "name": "mobile: 360 780",
                "pwidth": 360,
                "pheight": 780,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": "360",
                "height": "780",
                "keyid": 33
            },
            {
                "name": "tablet: 768 1024",
                "pwidth": 768,
                "pheight": 1024,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": "768",
                "height": "1024",
                "keyid": 34
            },
            {
                "name": "tablet: 800 1280",
                "pwidth": 800,
                "pheight": 1280,
                "pixratio": 1,
                "ppi": 100,
                "cssppi": 100,
                "width": "800",
                "height": "1280",
                "keyid": 35
            },
        ];

        const defaultViews = [...standardViews, ...problemViews, mobileViews]


        const storageCheck = localStorage.getItem("IframeStorage") || '';
        const linkcheck = localStorage.getItem("link") || '';
        const IframeStorage = storageCheck.length > 0 ? JSON.parse(storageCheck) : defaultViews;
        const IframeStorage1 = standardViews;
        const IframeStorage2 = problemViews;
        const IframeStorage3 = mobileViews;
        const linkStorage = linkcheck.length > 0 ? linkcheck : '';
        this.setState({ Iframes: IframeStorage, link: linkStorage, 
            Iframesa: IframeStorage1,
            Iframesb: IframeStorage2,
            Iframesc: IframeStorage3 });
    }
    public render() {

    console.log('state',this.state);
        return (
            <div className="container">
                <AddBlock devices={this.state.devices} addBlock={this.handleAdd} changeLink={this.handleLink} />
                <IframesContainer flipPropsFn={this.flipPropsFn} removeBlock={this.removeBlock} link={this.state.link} Iframes={this.state.Iframes} />

                {/* <h1>Problem</h1>
                <IframesContainer flipPropsFn={this.flipPropsFnb} removeBlock={this.removeBlock} link={this.state.link} Iframes={this.state.Iframesb} />

                <h1>Mobile</h1>
                <IframesContainer flipPropsFn={this.flipPropsFnc} removeBlock={this.removeBlock} link={this.state.link} Iframes={this.state.Iframesc} /> */}
            </div>
        );
    }
}