import * as React from "react";


export default class Task extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            width : null,
            height : null,
            pwidth : null,
            pheight : null,
            pixratio : null,
            name : null,
            addBlock : this.props.addBlock,
            changeLink : this.props.changeLink,
            link: "https://" ,
            devices : this.props.devices,
            typetoggle : false,
            customSelectValue: "",
            addblocktoggle: false
        };
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCustomAdd = this.handleAdd.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleLinkInputChange = this.handleLinkInputChange.bind(this);
        this.typetoggleFn = this.typetoggleFn.bind(this);
        this.customSelectFn = this.customSelectFn.bind(this);
        this.addBlockToggleFn = this.addBlockToggleFn.bind(this);
    }
    handleWidthChange(event: any) {
        const target = event.target;
        const value = target.value;
        this.setState({
            width: value
        });
    }
    handleHeightChange(event: any) {
        const target = event.target;
        const value = target.value;
        this.setState({
            height: value
        });
    }
    handleNameChange(event: any) {
        const target = event.target;
        const value = target.value;
        this.setState({
            name: value
        });
    }
    handleCustomAdd(event: any) {
        this.state.addBlock(this.state.pixratio,this.state.pwidth,this.state.pheight,this.state.width,this.state.height,this.state.name)
    }
    //pr:any, pw: any, ph:any, w:any,h:any,n:any
    handleAdd(event: any) {
        if (this.state.width && this.state.height && this.state.name) {
            this.state.addBlock(this.state.pixratio,this.state.pwidth,this.state.pheight,this.state.width,this.state.height,this.state.name)
        }
        this.setState({
            addblocktoggle: false
        });
    }
    handleLinkInputChange(event: any) {
        const target = event.target;
        const value = target.value;
        this.setState({
            link: value
        });
    }
    handleLinkChange(event: any) {
        this.state.changeLink(this.state.link)
    }
    typetoggleFn(event: any) {
        const target = event.target;
        const value = target.checked;
        this.setState({
            typetoggle: value
        });
    }
    customSelectFn(event: any) {
        const target = event.target;
        const value = target.value;
        this.setState({
            customSelectValue: value,
            width: this.state.devices[value].width,
            height: this.state.devices[value].height,
            pwidth: this.state.devices[value].pwidth,
            pheight: this.state.devices[value].pheight,
            pixratio: this.state.devices[value].pixratio,
            name: this.state.devices[value].name
        });
    }
    addBlockToggleFn() {
        this.setState((prevState: any) => ({
            addblocktoggle: !prevState.addblocktoggle
        }));
    }

    public render() {
        console.log('hi mark')
        console.log(this.state.devices);
        return (
            <div className="controlBlock">

                <div className="AddInputs">
                    <button className="addbtn" onClick={this.addBlockToggleFn}>Add view</button>
                    { this.state.addblocktoggle === true ? (
                        <div className="addmodal">
                            <label>Add View 
                                <span className="typeToggle">
                                    <span>List</span>
                                        <input name="typetoggle" type="checkbox" id="typetoggle" className="togglecheck" onChange={this.typetoggleFn} checked={this.state.typetoggle}/>
                                    <label className="toggle" htmlFor="typetoggle">
                                    </label>
                                    <span>Custom</span>
                                </span>
                            </label>
                            {
                                this.state.typetoggle === true ? (
                                        <div className="customView">
                                            <div className="inputBlock">
                                                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                                            </div>
                                            <div className="inputBlock whcontainer">
                                                <input type="number" placeholder="Width" value={this.state.width} onChange={this.handleWidthChange}/>
                                                <span> x </span>
                                                <input type="number" placeholder="Height" value={this.state.height} onChange={this.handleHeightChange}/>
                                            </div>
                                            <div className="inputBlock">
                                            </div>
                                            <div className="btn-container">
                                                <button className="right-button" onClick={this.handleCustomAdd}>Add</button>
                                            </div>
                                        </div>
                                    ) : (
                                    <div className="devices">
                                        <select value={this.state.customSelectValue} defaultValue="Please Select" onChange={this.customSelectFn}>
                                            <option value="Please Select">Please select a device</option>
                                            {this.state.devices.map((item: any, i:any) => {
                                                return <option key={i} value={i}>{item.name} ({item.width} X {item.height})</option>
                                            })}
                                        </select>
                                        <div className="btn-container">
                                            <button className="right-button" onClick={this.handleAdd}>Add</button>
                                        </div>
                                    </div>)
                                
                            }
                        </div>
                        ) : (<></>)
                    }                    
                </div>
                <div className="linkInputs">
                    <div className="inputBlock">
                        <label className="inline-label">Link</label>
                        <input type="text" value={this.state.link} onChange={this.handleLinkInputChange}/>
                    </div>
                    <button onClick={this.handleLinkChange}>Set</button>
                </div>
            </div>
        );
    }
}

        