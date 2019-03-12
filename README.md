# AWS-Go-SDK-Release-Notes-Parser
Generate a markdown file that shows release changes per module instead of per release date. 
Please checkout this [parsed file](./parsed_log.md) see how it looks like.

# Package Requirements:
```
npm install commander --save
```

# Usage:
```
Usage: parser_refactoring [options]

AWS Go SDK Release Notes Parser
Generate a markdown file that shows release changes per module instead of per release date

Options:
  -l, --log [log]          Path to release change log makrdown file, by default is CHANGELOG.md (default: "CHANGELOG.md")
  -o, --out [out]          Path to store the output parsed markdown file, by default is parsed_log.md (default: "parsed_log.md")
  -v, --version [version]  Parse changes after this version inclusive. (default: "0.0.0")
  -h, --help               output usage information
```
