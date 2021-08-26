export class FrameStorage {
    frameRules = new Map();

    constructor(engine) {
        this.engine = engine;
    }

    /**
     * Records frame
     * @param request
     */
    recordFrame(request) {
        const frameUrl = request.sourceUrl;
        const rule = this.engine.matchFrame(frameUrl);
        this.frameRules.set(frameUrl, rule);
    }

    /**
     * Returns frame rule if found
     * @param request
     */
    getFrameRule(request) {
        return this.frameRules.get(request.sourceUrl);
    }
}
