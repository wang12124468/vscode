/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IIssueService } from 'vs/platform/issue/node/issue';
import { IMainProcessService } from 'vs/platform/ipc/electron-browser/mainProcessService';
import { createChannelSender } from 'vs/base/parts/ipc/common/ipc';

export class IssueService {

	_serviceBrand: undefined;

	constructor(@IMainProcessService mainProcessService: IMainProcessService) {
		return createChannelSender<IIssueService>(mainProcessService.getChannel('issue'));
	}
}
