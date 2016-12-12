module.exports = {
    display: output => ({
        _toMime: () => outpaut
    }),
    HTML: output => ({
        _toHtml: () => output
    }),
    JPEG: output => ({
        _toJpeg: () => output
    }),
    PNG: output => ({
        _toPng: () => output
    }),
    SVG: output => ({
        _toSvg: () => output
    }),
    Markdown: output => ({
        _toMime: () => ({
            'text/markdown': output
        })
    }),
    Latex: output => ({
        _toMime: () => ({
            'text/latex': output
        })
    }),
    JSON: output => ({
        _toMime: () => ({
            'application/json': output
        })
    }),
    Javascript: output => ({
        _toMime: () => ({
            'application/javascript': output
        })
    }),
    PDF: output => ({
        _toMime: () => ({
            'application/pdf': output
        })
    }),
}
