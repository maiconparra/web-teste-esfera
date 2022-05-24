import React from 'react';

import { ErrorsInterface } from '../../interface/errors.interface';

import { Warning, Bug, Check } from 'phosphor-react';

export class EstateRequestsTemplate {
    constructor() {

    }

    protected errorReport(value: ErrorsInterface) {
        return (
            <>
                <div className="absolute flex flex-row items-left">
                    <Bug size={32} />
                    <div className="">
                        {value.status}
                    </div>
                    <div className="">
                        {value.statusText}
                    </div>
                </div>
            </>
        );
    }
    
    protected warningReport(value: ErrorsInterface) {
        return (
            <>
                <div className="absolute flex flex-row items-left">
                    <Warning size={32} />
                    <div className="">
                        {value.status}
                    </div>
                    <div className="">
                        {value.statusText}
                    </div>
                </div>
            </>
        );
    }

    protected seccessReport(value: ErrorsInterface) {
        return (
            <>
                <div className="absolute flex flex-row items-left">
                    <Check size={32} />
                    <div className="">
                        {value.status}
                    </div>
                    <div className="">
                        {value.statusText}
                    </div>
                </div>
            </>
        );
    }
}