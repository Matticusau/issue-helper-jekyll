//
// Author:  Matt Lavery
// Date:    2020-07-28
// Purpose: Process the actions based on event type
//
// When         Who         What
// ------------------------------------------------------------------------------------------
//

// import prWelcomeHandler from './prwelcomehandler';
// import prCommentHandler from './prcommenthandler';
// import { prLabelHandler_OnDemand, prLabelHandler_OnSchedule } from './prlabelhandler';
// import { prReviewHandler_OnDemand } from './prreviewerhandler';
// import { prMergeHandler_OnDemand, prMergeHandler_OnSchedule } from './prmergerhandler';
import { CoreModule, GitHubModule } from './types';

export default async function main(core: CoreModule, github: GitHubModule) {
    core.debug('context: ' + github.context);
    
    const event = github.context.eventName
    switch (event) {
        // case 'status':
        //     await statusHandler(client, github.context, config)
        //     break
        case 'issue_comment':
            // await prCommentHandler(core, github);
            // await prMergeHandler_OnDemand(core, github);
            break;
        case 'schedule':
            // await prLabelHandler_OnSchedule(core, github);
            // await prReviewHandler_OnDemand(core, github);
            // await prMergeHandler_OnSchedule(core, github);
            break;
        // case 'push':
        // //     await pushHandler(client, github.context, config)
        //     await prHello(core, github);
        //     break
    }
}
