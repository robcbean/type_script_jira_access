var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function generateCredentialString(user_name, user_token) {
    var credentials = "".concat(user_name, ":").concat(user_token);
    var ret = Buffer.from(credentials, 'ascii').toString('base64');
    return ret;
}
function generateRequestHeader(user_name, user_token) {
    var ret_headers = new Headers();
    ret_headers.append("Content-Type", "application/json");
    ret_headers.append("Accept", "application/json");
    ret_headers.append("Authorization", generateCredentialString(user_name, user_token));
    return ret_headers;
}
function generateSearchURL(user_domain, search_string) {
    var ret = "https://".concat(user_domain, "/rest/api/3/search?jql=") + encodeURIComponent(search_string);
    return ret;
}
function getJiraList(user_domain, user_name, user_token) {
    return __awaiter(this, void 0, void 0, function () {
        var ret, requestOptions, response, json_value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ret = [];
                    requestOptions = {
                        method: "GET",
                        headers: generateRequestHeader(user_name, user_token)
                    };
                    return [4 /*yield*/, fetch(generateSearchURL(user_domain, 'status != "Done" '), requestOptions)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json_value = _a.sent();
                    json_value['issues'].forEach(function (issue) {
                        ret[issue['key']] = issue['name'];
                    });
                    return [2 /*return*/, ret];
            }
        });
    });
}
var USER_DOMAIN = "robertobean.atlassian.net";
var USER_NAME = "robcbean@gmail.com";
var JIRA_TOKEN = process.env.JIRA_TOKEN;
getJiraList(USER_DOMAIN, USER_NAME, JIRA_TOKEN).then(function (jira_tasks) {
    console.log(jira_tasks);
})["catch"](function (error) {
    console.log(console.error());
});
