import CMS from "netlify-cms";

import ProjectPostPreview from "./preview-templates/ProjectPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("project", ProjectPostPreview);
