/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t()
  else if ('function' == typeof define && define.amd) define([], t)
  else {
    var r = t()
    for (var n in r) ('object' == typeof exports ? exports : e)[n] = r[n]
  }
})(global, () =>
  (() => {
    'use strict'
    var e = {
        686: (e, t, r) => {
          const n = r(661),
            o = r(876),
            i =
              'function' == typeof Symbol && 'function' == typeof Symbol.for
                ? Symbol.for('nodejs.util.inspect.custom')
                : null
          ;(t.hp = c), (t.IS = 50)
          const a = 2147483647
          function s(e) {
            if (e > a)
              throw new RangeError(
                'The value "' + e + '" is invalid for option "size"'
              )
            const t = new Uint8Array(e)
            return Object.setPrototypeOf(t, c.prototype), t
          }
          function c(e, t, r) {
            if ('number' == typeof e) {
              if ('string' == typeof t)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number'
                )
              return h(e)
            }
            return l(e, t, r)
          }
          function l(e, t, r) {
            if ('string' == typeof e)
              return (function (e, t) {
                if (
                  (('string' == typeof t && '' !== t) || (t = 'utf8'),
                  !c.isEncoding(t))
                )
                  throw new TypeError('Unknown encoding: ' + t)
                const r = 0 | g(e, t)
                let n = s(r)
                const o = n.write(e, t)
                return o !== r && (n = n.slice(0, o)), n
              })(e, t)
            if (ArrayBuffer.isView(e))
              return (function (e) {
                if (W(e, Uint8Array)) {
                  const t = new Uint8Array(e)
                  return d(t.buffer, t.byteOffset, t.byteLength)
                }
                return f(e)
              })(e)
            if (null == e)
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                  typeof e
              )
            if (W(e, ArrayBuffer) || (e && W(e.buffer, ArrayBuffer)))
              return d(e, t, r)
            if (
              'undefined' != typeof SharedArrayBuffer &&
              (W(e, SharedArrayBuffer) || (e && W(e.buffer, SharedArrayBuffer)))
            )
              return d(e, t, r)
            if ('number' == typeof e)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
              )
            const n = e.valueOf && e.valueOf()
            if (null != n && n !== e) return c.from(n, t, r)
            const o = (function (e) {
              if (c.isBuffer(e)) {
                const t = 0 | p(e.length),
                  r = s(t)
                return 0 === r.length || e.copy(r, 0, 0, t), r
              }
              return void 0 !== e.length
                ? 'number' != typeof e.length || X(e.length)
                  ? s(0)
                  : f(e)
                : 'Buffer' === e.type && Array.isArray(e.data)
                ? f(e.data)
                : void 0
            })(e)
            if (o) return o
            if (
              'undefined' != typeof Symbol &&
              null != Symbol.toPrimitive &&
              'function' == typeof e[Symbol.toPrimitive]
            )
              return c.from(e[Symbol.toPrimitive]('string'), t, r)
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof e
            )
          }
          function u(e) {
            if ('number' != typeof e)
              throw new TypeError('"size" argument must be of type number')
            if (e < 0)
              throw new RangeError(
                'The value "' + e + '" is invalid for option "size"'
              )
          }
          function h(e) {
            return u(e), s(e < 0 ? 0 : 0 | p(e))
          }
          function f(e) {
            const t = e.length < 0 ? 0 : 0 | p(e.length),
              r = s(t)
            for (let n = 0; n < t; n += 1) r[n] = 255 & e[n]
            return r
          }
          function d(e, t, r) {
            if (t < 0 || e.byteLength < t)
              throw new RangeError('"offset" is outside of buffer bounds')
            if (e.byteLength < t + (r || 0))
              throw new RangeError('"length" is outside of buffer bounds')
            let n
            return (
              (n =
                void 0 === t && void 0 === r
                  ? new Uint8Array(e)
                  : void 0 === r
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, r)),
              Object.setPrototypeOf(n, c.prototype),
              n
            )
          }
          function p(e) {
            if (e >= a)
              throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' +
                  a.toString(16) +
                  ' bytes'
              )
            return 0 | e
          }
          function g(e, t) {
            if (c.isBuffer(e)) return e.length
            if (ArrayBuffer.isView(e) || W(e, ArrayBuffer)) return e.byteLength
            if ('string' != typeof e)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof e
              )
            const r = e.length,
              n = arguments.length > 2 && !0 === arguments[2]
            if (!n && 0 === r) return 0
            let o = !1
            for (;;)
              switch (t) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return r
                case 'utf8':
                case 'utf-8':
                  return H(e).length
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 2 * r
                case 'hex':
                  return r >>> 1
                case 'base64':
                  return K(e).length
                default:
                  if (o) return n ? -1 : H(e).length
                  ;(t = ('' + t).toLowerCase()), (o = !0)
              }
          }
          function m(e, t, r) {
            let n = !1
            if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
            if (
              ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
            )
              return ''
            if ((r >>>= 0) <= (t >>>= 0)) return ''
            for (e || (e = 'utf8'); ; )
              switch (e) {
                case 'hex':
                  return B(this, t, r)
                case 'utf8':
                case 'utf-8':
                  return C(this, t, r)
                case 'ascii':
                  return N(this, t, r)
                case 'latin1':
                case 'binary':
                  return A(this, t, r)
                case 'base64':
                  return I(this, t, r)
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return U(this, t, r)
                default:
                  if (n) throw new TypeError('Unknown encoding: ' + e)
                  ;(e = (e + '').toLowerCase()), (n = !0)
              }
          }
          function y(e, t, r) {
            const n = e[t]
            ;(e[t] = e[r]), (e[r] = n)
          }
          function v(e, t, r, n, o) {
            if (0 === e.length) return -1
            if (
              ('string' == typeof r
                ? ((n = r), (r = 0))
                : r > 2147483647
                ? (r = 2147483647)
                : r < -2147483648 && (r = -2147483648),
              X((r = +r)) && (r = o ? 0 : e.length - 1),
              r < 0 && (r = e.length + r),
              r >= e.length)
            ) {
              if (o) return -1
              r = e.length - 1
            } else if (r < 0) {
              if (!o) return -1
              r = 0
            }
            if (('string' == typeof t && (t = c.from(t, n)), c.isBuffer(t)))
              return 0 === t.length ? -1 : w(e, t, r, n, o)
            if ('number' == typeof t)
              return (
                (t &= 255),
                'function' == typeof Uint8Array.prototype.indexOf
                  ? o
                    ? Uint8Array.prototype.indexOf.call(e, t, r)
                    : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                  : w(e, [t], r, n, o)
              )
            throw new TypeError('val must be string, number or Buffer')
          }
          function w(e, t, r, n, o) {
            let i,
              a = 1,
              s = e.length,
              c = t.length
            if (
              void 0 !== n &&
              ('ucs2' === (n = String(n).toLowerCase()) ||
                'ucs-2' === n ||
                'utf16le' === n ||
                'utf-16le' === n)
            ) {
              if (e.length < 2 || t.length < 2) return -1
              ;(a = 2), (s /= 2), (c /= 2), (r /= 2)
            }
            function l(e, t) {
              return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (o) {
              let n = -1
              for (i = r; i < s; i++)
                if (l(e, i) === l(t, -1 === n ? 0 : i - n)) {
                  if ((-1 === n && (n = i), i - n + 1 === c)) return n * a
                } else -1 !== n && (i -= i - n), (n = -1)
            } else
              for (r + c > s && (r = s - c), i = r; i >= 0; i--) {
                let r = !0
                for (let n = 0; n < c; n++)
                  if (l(e, i + n) !== l(t, n)) {
                    r = !1
                    break
                  }
                if (r) return i
              }
            return -1
          }
          function b(e, t, r, n) {
            r = Number(r) || 0
            const o = e.length - r
            n ? (n = Number(n)) > o && (n = o) : (n = o)
            const i = t.length
            let a
            for (n > i / 2 && (n = i / 2), a = 0; a < n; ++a) {
              const n = parseInt(t.substr(2 * a, 2), 16)
              if (X(n)) return a
              e[r + a] = n
            }
            return a
          }
          function E(e, t, r, n) {
            return $(H(t, e.length - r), e, r, n)
          }
          function k(e, t, r, n) {
            return $(
              (function (e) {
                const t = []
                for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r))
                return t
              })(t),
              e,
              r,
              n
            )
          }
          function S(e, t, r, n) {
            return $(K(t), e, r, n)
          }
          function x(e, t, r, n) {
            return $(
              (function (e, t) {
                let r, n, o
                const i = []
                for (let a = 0; a < e.length && !((t -= 2) < 0); ++a)
                  (r = e.charCodeAt(a)),
                    (n = r >> 8),
                    (o = r % 256),
                    i.push(o),
                    i.push(n)
                return i
              })(t, e.length - r),
              e,
              r,
              n
            )
          }
          function I(e, t, r) {
            return 0 === t && r === e.length
              ? n.fromByteArray(e)
              : n.fromByteArray(e.slice(t, r))
          }
          function C(e, t, r) {
            r = Math.min(e.length, r)
            const n = []
            let o = t
            for (; o < r; ) {
              const t = e[o]
              let i = null,
                a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1
              if (o + a <= r) {
                let r, n, s, c
                switch (a) {
                  case 1:
                    t < 128 && (i = t)
                    break
                  case 2:
                    ;(r = e[o + 1]),
                      128 == (192 & r) &&
                        ((c = ((31 & t) << 6) | (63 & r)), c > 127 && (i = c))
                    break
                  case 3:
                    ;(r = e[o + 1]),
                      (n = e[o + 2]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        ((c = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                        c > 2047 && (c < 55296 || c > 57343) && (i = c))
                    break
                  case 4:
                    ;(r = e[o + 1]),
                      (n = e[o + 2]),
                      (s = e[o + 3]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        128 == (192 & s) &&
                        ((c =
                          ((15 & t) << 18) |
                          ((63 & r) << 12) |
                          ((63 & n) << 6) |
                          (63 & s)),
                        c > 65535 && c < 1114112 && (i = c))
                }
              }
              null === i
                ? ((i = 65533), (a = 1))
                : i > 65535 &&
                  ((i -= 65536),
                  n.push(((i >>> 10) & 1023) | 55296),
                  (i = 56320 | (1023 & i))),
                n.push(i),
                (o += a)
            }
            return (function (e) {
              const t = e.length
              if (t <= O) return String.fromCharCode.apply(String, e)
              let r = '',
                n = 0
              for (; n < t; )
                r += String.fromCharCode.apply(String, e.slice(n, (n += O)))
              return r
            })(n)
          }
          ;(c.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const e = new Uint8Array(1),
                t = {
                  foo: function () {
                    return 42
                  }
                }
              return (
                Object.setPrototypeOf(t, Uint8Array.prototype),
                Object.setPrototypeOf(e, t),
                42 === e.foo()
              )
            } catch (e) {
              return !1
            }
          })()),
            c.TYPED_ARRAY_SUPPORT ||
              'undefined' == typeof console ||
              'function' != typeof console.error ||
              console.error(
                'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
              ),
            Object.defineProperty(c.prototype, 'parent', {
              enumerable: !0,
              get: function () {
                if (c.isBuffer(this)) return this.buffer
              }
            }),
            Object.defineProperty(c.prototype, 'offset', {
              enumerable: !0,
              get: function () {
                if (c.isBuffer(this)) return this.byteOffset
              }
            }),
            (c.poolSize = 8192),
            (c.from = function (e, t, r) {
              return l(e, t, r)
            }),
            Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(c, Uint8Array),
            (c.alloc = function (e, t, r) {
              return (function (e, t, r) {
                return (
                  u(e),
                  e <= 0
                    ? s(e)
                    : void 0 !== t
                    ? 'string' == typeof r
                      ? s(e).fill(t, r)
                      : s(e).fill(t)
                    : s(e)
                )
              })(e, t, r)
            }),
            (c.allocUnsafe = function (e) {
              return h(e)
            }),
            (c.allocUnsafeSlow = function (e) {
              return h(e)
            }),
            (c.isBuffer = function (e) {
              return null != e && !0 === e._isBuffer && e !== c.prototype
            }),
            (c.compare = function (e, t) {
              if (
                (W(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)),
                W(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)),
                !c.isBuffer(e) || !c.isBuffer(t))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                )
              if (e === t) return 0
              let r = e.length,
                n = t.length
              for (let o = 0, i = Math.min(r, n); o < i; ++o)
                if (e[o] !== t[o]) {
                  ;(r = e[o]), (n = t[o])
                  break
                }
              return r < n ? -1 : n < r ? 1 : 0
            }),
            (c.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return !0
                default:
                  return !1
              }
            }),
            (c.concat = function (e, t) {
              if (!Array.isArray(e))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                )
              if (0 === e.length) return c.alloc(0)
              let r
              if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
              const n = c.allocUnsafe(t)
              let o = 0
              for (r = 0; r < e.length; ++r) {
                let t = e[r]
                if (W(t, Uint8Array))
                  o + t.length > n.length
                    ? (c.isBuffer(t) || (t = c.from(t)), t.copy(n, o))
                    : Uint8Array.prototype.set.call(n, t, o)
                else {
                  if (!c.isBuffer(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    )
                  t.copy(n, o)
                }
                o += t.length
              }
              return n
            }),
            (c.byteLength = g),
            (c.prototype._isBuffer = !0),
            (c.prototype.swap16 = function () {
              const e = this.length
              if (e % 2 != 0)
                throw new RangeError(
                  'Buffer size must be a multiple of 16-bits'
                )
              for (let t = 0; t < e; t += 2) y(this, t, t + 1)
              return this
            }),
            (c.prototype.swap32 = function () {
              const e = this.length
              if (e % 4 != 0)
                throw new RangeError(
                  'Buffer size must be a multiple of 32-bits'
                )
              for (let t = 0; t < e; t += 4)
                y(this, t, t + 3), y(this, t + 1, t + 2)
              return this
            }),
            (c.prototype.swap64 = function () {
              const e = this.length
              if (e % 8 != 0)
                throw new RangeError(
                  'Buffer size must be a multiple of 64-bits'
                )
              for (let t = 0; t < e; t += 8)
                y(this, t, t + 7),
                  y(this, t + 1, t + 6),
                  y(this, t + 2, t + 5),
                  y(this, t + 3, t + 4)
              return this
            }),
            (c.prototype.toString = function () {
              const e = this.length
              return 0 === e
                ? ''
                : 0 === arguments.length
                ? C(this, 0, e)
                : m.apply(this, arguments)
            }),
            (c.prototype.toLocaleString = c.prototype.toString),
            (c.prototype.equals = function (e) {
              if (!c.isBuffer(e))
                throw new TypeError('Argument must be a Buffer')
              return this === e || 0 === c.compare(this, e)
            }),
            (c.prototype.inspect = function () {
              let e = ''
              const r = t.IS
              return (
                (e = this.toString('hex', 0, r)
                  .replace(/(.{2})/g, '$1 ')
                  .trim()),
                this.length > r && (e += ' ... '),
                '<Buffer ' + e + '>'
              )
            }),
            i && (c.prototype[i] = c.prototype.inspect),
            (c.prototype.compare = function (e, t, r, n, o) {
              if (
                (W(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)),
                !c.isBuffer(e))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof e
                )
              if (
                (void 0 === t && (t = 0),
                void 0 === r && (r = e ? e.length : 0),
                void 0 === n && (n = 0),
                void 0 === o && (o = this.length),
                t < 0 || r > e.length || n < 0 || o > this.length)
              )
                throw new RangeError('out of range index')
              if (n >= o && t >= r) return 0
              if (n >= o) return -1
              if (t >= r) return 1
              if (this === e) return 0
              let i = (o >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (t >>>= 0)
              const s = Math.min(i, a),
                l = this.slice(n, o),
                u = e.slice(t, r)
              for (let e = 0; e < s; ++e)
                if (l[e] !== u[e]) {
                  ;(i = l[e]), (a = u[e])
                  break
                }
              return i < a ? -1 : a < i ? 1 : 0
            }),
            (c.prototype.includes = function (e, t, r) {
              return -1 !== this.indexOf(e, t, r)
            }),
            (c.prototype.indexOf = function (e, t, r) {
              return v(this, e, t, r, !0)
            }),
            (c.prototype.lastIndexOf = function (e, t, r) {
              return v(this, e, t, r, !1)
            }),
            (c.prototype.write = function (e, t, r, n) {
              if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0)
              else if (void 0 === r && 'string' == typeof t)
                (n = t), (r = this.length), (t = 0)
              else {
                if (!isFinite(t))
                  throw new Error(
                    'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                  )
                ;(t >>>= 0),
                  isFinite(r)
                    ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                    : ((n = r), (r = void 0))
              }
              const o = this.length - t
              if (
                ((void 0 === r || r > o) && (r = o),
                (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
              )
                throw new RangeError('Attempt to write outside buffer bounds')
              n || (n = 'utf8')
              let i = !1
              for (;;)
                switch (n) {
                  case 'hex':
                    return b(this, e, t, r)
                  case 'utf8':
                  case 'utf-8':
                    return E(this, e, t, r)
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return k(this, e, t, r)
                  case 'base64':
                    return S(this, e, t, r)
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return x(this, e, t, r)
                  default:
                    if (i) throw new TypeError('Unknown encoding: ' + n)
                    ;(n = ('' + n).toLowerCase()), (i = !0)
                }
            }),
            (c.prototype.toJSON = function () {
              return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0)
              }
            })
          const O = 4096
          function N(e, t, r) {
            let n = ''
            r = Math.min(e.length, r)
            for (let o = t; o < r; ++o) n += String.fromCharCode(127 & e[o])
            return n
          }
          function A(e, t, r) {
            let n = ''
            r = Math.min(e.length, r)
            for (let o = t; o < r; ++o) n += String.fromCharCode(e[o])
            return n
          }
          function B(e, t, r) {
            const n = e.length
            ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
            let o = ''
            for (let n = t; n < r; ++n) o += Y[e[n]]
            return o
          }
          function U(e, t, r) {
            const n = e.slice(t, r)
            let o = ''
            for (let e = 0; e < n.length - 1; e += 2)
              o += String.fromCharCode(n[e] + 256 * n[e + 1])
            return o
          }
          function T(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
            if (e + t > r)
              throw new RangeError('Trying to access beyond buffer length')
          }
          function P(e, t, r, n, o, i) {
            if (!c.isBuffer(e))
              throw new TypeError('"buffer" argument must be a Buffer instance')
            if (t > o || t < i)
              throw new RangeError('"value" argument is out of bounds')
            if (r + n > e.length) throw new RangeError('Index out of range')
          }
          function j(e, t, r, n, o) {
            J(t, n, o, e, r, 7)
            let i = Number(t & BigInt(4294967295))
            ;(e[r++] = i),
              (i >>= 8),
              (e[r++] = i),
              (i >>= 8),
              (e[r++] = i),
              (i >>= 8),
              (e[r++] = i)
            let a = Number((t >> BigInt(32)) & BigInt(4294967295))
            return (
              (e[r++] = a),
              (a >>= 8),
              (e[r++] = a),
              (a >>= 8),
              (e[r++] = a),
              (a >>= 8),
              (e[r++] = a),
              r
            )
          }
          function R(e, t, r, n, o) {
            J(t, n, o, e, r, 7)
            let i = Number(t & BigInt(4294967295))
            ;(e[r + 7] = i),
              (i >>= 8),
              (e[r + 6] = i),
              (i >>= 8),
              (e[r + 5] = i),
              (i >>= 8),
              (e[r + 4] = i)
            let a = Number((t >> BigInt(32)) & BigInt(4294967295))
            return (
              (e[r + 3] = a),
              (a >>= 8),
              (e[r + 2] = a),
              (a >>= 8),
              (e[r + 1] = a),
              (a >>= 8),
              (e[r] = a),
              r + 8
            )
          }
          function M(e, t, r, n, o, i) {
            if (r + n > e.length) throw new RangeError('Index out of range')
            if (r < 0) throw new RangeError('Index out of range')
          }
          function q(e, t, r, n, i) {
            return (
              (t = +t),
              (r >>>= 0),
              i || M(e, 0, r, 4),
              o.write(e, t, r, n, 23, 4),
              r + 4
            )
          }
          function _(e, t, r, n, i) {
            return (
              (t = +t),
              (r >>>= 0),
              i || M(e, 0, r, 8),
              o.write(e, t, r, n, 52, 8),
              r + 8
            )
          }
          ;(c.prototype.slice = function (e, t) {
            const r = this.length
            ;(e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
              (t = void 0 === t ? r : ~~t) < 0
                ? (t += r) < 0 && (t = 0)
                : t > r && (t = r),
              t < e && (t = e)
            const n = this.subarray(e, t)
            return Object.setPrototypeOf(n, c.prototype), n
          }),
            (c.prototype.readUintLE = c.prototype.readUIntLE =
              function (e, t, r) {
                ;(e >>>= 0), (t >>>= 0), r || T(e, t, this.length)
                let n = this[e],
                  o = 1,
                  i = 0
                for (; ++i < t && (o *= 256); ) n += this[e + i] * o
                return n
              }),
            (c.prototype.readUintBE = c.prototype.readUIntBE =
              function (e, t, r) {
                ;(e >>>= 0), (t >>>= 0), r || T(e, t, this.length)
                let n = this[e + --t],
                  o = 1
                for (; t > 0 && (o *= 256); ) n += this[e + --t] * o
                return n
              }),
            (c.prototype.readUint8 = c.prototype.readUInt8 =
              function (e, t) {
                return (e >>>= 0), t || T(e, 1, this.length), this[e]
              }),
            (c.prototype.readUint16LE = c.prototype.readUInt16LE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || T(e, 2, this.length),
                  this[e] | (this[e + 1] << 8)
                )
              }),
            (c.prototype.readUint16BE = c.prototype.readUInt16BE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || T(e, 2, this.length),
                  (this[e] << 8) | this[e + 1]
                )
              }),
            (c.prototype.readUint32LE = c.prototype.readUInt32LE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || T(e, 4, this.length),
                  (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                    16777216 * this[e + 3]
                )
              }),
            (c.prototype.readUint32BE = c.prototype.readUInt32BE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || T(e, 4, this.length),
                  16777216 * this[e] +
                    ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                )
              }),
            (c.prototype.readBigUInt64LE = Z(function (e) {
              G((e >>>= 0), 'offset')
              const t = this[e],
                r = this[e + 7]
              ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
              const n =
                  t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                o =
                  this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24
              return BigInt(n) + (BigInt(o) << BigInt(32))
            })),
            (c.prototype.readBigUInt64BE = Z(function (e) {
              G((e >>>= 0), 'offset')
              const t = this[e],
                r = this[e + 7]
              ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
              const n =
                  t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                o =
                  this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r
              return (BigInt(n) << BigInt(32)) + BigInt(o)
            })),
            (c.prototype.readIntLE = function (e, t, r) {
              ;(e >>>= 0), (t >>>= 0), r || T(e, t, this.length)
              let n = this[e],
                o = 1,
                i = 0
              for (; ++i < t && (o *= 256); ) n += this[e + i] * o
              return (o *= 128), n >= o && (n -= Math.pow(2, 8 * t)), n
            }),
            (c.prototype.readIntBE = function (e, t, r) {
              ;(e >>>= 0), (t >>>= 0), r || T(e, t, this.length)
              let n = t,
                o = 1,
                i = this[e + --n]
              for (; n > 0 && (o *= 256); ) i += this[e + --n] * o
              return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i
            }),
            (c.prototype.readInt8 = function (e, t) {
              return (
                (e >>>= 0),
                t || T(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
              )
            }),
            (c.prototype.readInt16LE = function (e, t) {
              ;(e >>>= 0), t || T(e, 2, this.length)
              const r = this[e] | (this[e + 1] << 8)
              return 32768 & r ? 4294901760 | r : r
            }),
            (c.prototype.readInt16BE = function (e, t) {
              ;(e >>>= 0), t || T(e, 2, this.length)
              const r = this[e + 1] | (this[e] << 8)
              return 32768 & r ? 4294901760 | r : r
            }),
            (c.prototype.readInt32LE = function (e, t) {
              return (
                (e >>>= 0),
                t || T(e, 4, this.length),
                this[e] |
                  (this[e + 1] << 8) |
                  (this[e + 2] << 16) |
                  (this[e + 3] << 24)
              )
            }),
            (c.prototype.readInt32BE = function (e, t) {
              return (
                (e >>>= 0),
                t || T(e, 4, this.length),
                (this[e] << 24) |
                  (this[e + 1] << 16) |
                  (this[e + 2] << 8) |
                  this[e + 3]
              )
            }),
            (c.prototype.readBigInt64LE = Z(function (e) {
              G((e >>>= 0), 'offset')
              const t = this[e],
                r = this[e + 7]
              ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
              const n =
                this[e + 4] +
                256 * this[e + 5] +
                65536 * this[e + 6] +
                (r << 24)
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24
                )
              )
            })),
            (c.prototype.readBigInt64BE = Z(function (e) {
              G((e >>>= 0), 'offset')
              const t = this[e],
                r = this[e + 7]
              ;(void 0 !== t && void 0 !== r) || z(e, this.length - 8)
              const n =
                (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r
                )
              )
            })),
            (c.prototype.readFloatLE = function (e, t) {
              return (
                (e >>>= 0),
                t || T(e, 4, this.length),
                o.read(this, e, !0, 23, 4)
              )
            }),
            (c.prototype.readFloatBE = function (e, t) {
              return (
                (e >>>= 0),
                t || T(e, 4, this.length),
                o.read(this, e, !1, 23, 4)
              )
            }),
            (c.prototype.readDoubleLE = function (e, t) {
              return (
                (e >>>= 0),
                t || T(e, 8, this.length),
                o.read(this, e, !0, 52, 8)
              )
            }),
            (c.prototype.readDoubleBE = function (e, t) {
              return (
                (e >>>= 0),
                t || T(e, 8, this.length),
                o.read(this, e, !1, 52, 8)
              )
            }),
            (c.prototype.writeUintLE = c.prototype.writeUIntLE =
              function (e, t, r, n) {
                ;(e = +e),
                  (t >>>= 0),
                  (r >>>= 0),
                  n || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
                let o = 1,
                  i = 0
                for (this[t] = 255 & e; ++i < r && (o *= 256); )
                  this[t + i] = (e / o) & 255
                return t + r
              }),
            (c.prototype.writeUintBE = c.prototype.writeUIntBE =
              function (e, t, r, n) {
                ;(e = +e),
                  (t >>>= 0),
                  (r >>>= 0),
                  n || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
                let o = r - 1,
                  i = 1
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                  this[t + o] = (e / i) & 255
                return t + r
              }),
            (c.prototype.writeUint8 = c.prototype.writeUInt8 =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || P(this, e, t, 1, 255, 0),
                  (this[t] = 255 & e),
                  t + 1
                )
              }),
            (c.prototype.writeUint16LE = c.prototype.writeUInt16LE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || P(this, e, t, 2, 65535, 0),
                  (this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  t + 2
                )
              }),
            (c.prototype.writeUint16BE = c.prototype.writeUInt16BE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || P(this, e, t, 2, 65535, 0),
                  (this[t] = e >>> 8),
                  (this[t + 1] = 255 & e),
                  t + 2
                )
              }),
            (c.prototype.writeUint32LE = c.prototype.writeUInt32LE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || P(this, e, t, 4, 4294967295, 0),
                  (this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e),
                  t + 4
                )
              }),
            (c.prototype.writeUint32BE = c.prototype.writeUInt32BE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || P(this, e, t, 4, 4294967295, 0),
                  (this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e),
                  t + 4
                )
              }),
            (c.prototype.writeBigUInt64LE = Z(function (e, t = 0) {
              return j(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
            })),
            (c.prototype.writeBigUInt64BE = Z(function (e, t = 0) {
              return R(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
            })),
            (c.prototype.writeIntLE = function (e, t, r, n) {
              if (((e = +e), (t >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1)
                P(this, e, t, r, n - 1, -n)
              }
              let o = 0,
                i = 1,
                a = 0
              for (this[t] = 255 & e; ++o < r && (i *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                  (this[t + o] = (((e / i) >> 0) - a) & 255)
              return t + r
            }),
            (c.prototype.writeIntBE = function (e, t, r, n) {
              if (((e = +e), (t >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1)
                P(this, e, t, r, n - 1, -n)
              }
              let o = r - 1,
                i = 1,
                a = 0
              for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                  (this[t + o] = (((e / i) >> 0) - a) & 255)
              return t + r
            }),
            (c.prototype.writeInt8 = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 1, 127, -128),
                e < 0 && (e = 255 + e + 1),
                (this[t] = 255 & e),
                t + 1
              )
            }),
            (c.prototype.writeInt16LE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 2, 32767, -32768),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              )
            }),
            (c.prototype.writeInt16BE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 2, 32767, -32768),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              )
            }),
            (c.prototype.writeInt32LE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 4, 2147483647, -2147483648),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24),
                t + 4
              )
            }),
            (c.prototype.writeInt32BE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              )
            }),
            (c.prototype.writeBigInt64LE = Z(function (e, t = 0) {
              return j(
                this,
                e,
                t,
                -BigInt('0x8000000000000000'),
                BigInt('0x7fffffffffffffff')
              )
            })),
            (c.prototype.writeBigInt64BE = Z(function (e, t = 0) {
              return R(
                this,
                e,
                t,
                -BigInt('0x8000000000000000'),
                BigInt('0x7fffffffffffffff')
              )
            })),
            (c.prototype.writeFloatLE = function (e, t, r) {
              return q(this, e, t, !0, r)
            }),
            (c.prototype.writeFloatBE = function (e, t, r) {
              return q(this, e, t, !1, r)
            }),
            (c.prototype.writeDoubleLE = function (e, t, r) {
              return _(this, e, t, !0, r)
            }),
            (c.prototype.writeDoubleBE = function (e, t, r) {
              return _(this, e, t, !1, r)
            }),
            (c.prototype.copy = function (e, t, r, n) {
              if (!c.isBuffer(e))
                throw new TypeError('argument should be a Buffer')
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                n > 0 && n < r && (n = r),
                n === r)
              )
                return 0
              if (0 === e.length || 0 === this.length) return 0
              if (t < 0) throw new RangeError('targetStart out of bounds')
              if (r < 0 || r >= this.length)
                throw new RangeError('Index out of range')
              if (n < 0) throw new RangeError('sourceEnd out of bounds')
              n > this.length && (n = this.length),
                e.length - t < n - r && (n = e.length - t + r)
              const o = n - r
              return (
                this === e &&
                'function' == typeof Uint8Array.prototype.copyWithin
                  ? this.copyWithin(t, r, n)
                  : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
                o
              )
            }),
            (c.prototype.fill = function (e, t, r, n) {
              if ('string' == typeof e) {
                if (
                  ('string' == typeof t
                    ? ((n = t), (t = 0), (r = this.length))
                    : 'string' == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && 'string' != typeof n)
                )
                  throw new TypeError('encoding must be a string')
                if ('string' == typeof n && !c.isEncoding(n))
                  throw new TypeError('Unknown encoding: ' + n)
                if (1 === e.length) {
                  const t = e.charCodeAt(0)
                  ;(('utf8' === n && t < 128) || 'latin1' === n) && (e = t)
                }
              } else
                'number' == typeof e
                  ? (e &= 255)
                  : 'boolean' == typeof e && (e = Number(e))
              if (t < 0 || this.length < t || this.length < r)
                throw new RangeError('Out of range index')
              if (r <= t) return this
              let o
              if (
                ((t >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                e || (e = 0),
                'number' == typeof e)
              )
                for (o = t; o < r; ++o) this[o] = e
              else {
                const i = c.isBuffer(e) ? e : c.from(e, n),
                  a = i.length
                if (0 === a)
                  throw new TypeError(
                    'The value "' + e + '" is invalid for argument "value"'
                  )
                for (o = 0; o < r - t; ++o) this[o + t] = i[o % a]
              }
              return this
            })
          const F = {}
          function L(e, t, r) {
            F[e] = class extends r {
              constructor() {
                super(),
                  Object.defineProperty(this, 'message', {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                  }),
                  (this.name = `${this.name} [${e}]`),
                  this.stack,
                  delete this.name
              }
              get code() {
                return e
              }
              set code(e) {
                Object.defineProperty(this, 'code', {
                  configurable: !0,
                  enumerable: !0,
                  value: e,
                  writable: !0
                })
              }
              toString() {
                return `${this.name} [${e}]: ${this.message}`
              }
            }
          }
          function D(e) {
            let t = '',
              r = e.length
            const n = '-' === e[0] ? 1 : 0
            for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`
            return `${e.slice(0, r)}${t}`
          }
          function J(e, t, r, n, o, i) {
            if (e > r || e < t) {
              const n = 'bigint' == typeof t ? 'n' : ''
              let o
              throw (
                ((o =
                  i > 3
                    ? 0 === t || t === BigInt(0)
                      ? `>= 0${n} and < 2${n} ** ${8 * (i + 1)}${n}`
                      : `>= -(2${n} ** ${8 * (i + 1) - 1}${n}) and < 2 ** ${
                          8 * (i + 1) - 1
                        }${n}`
                    : `>= ${t}${n} and <= ${r}${n}`),
                new F.ERR_OUT_OF_RANGE('value', o, e))
              )
            }
            !(function (e, t, r) {
              G(t, 'offset'),
                (void 0 !== e[t] && void 0 !== e[t + r]) ||
                  z(t, e.length - (r + 1))
            })(n, o, i)
          }
          function G(e, t) {
            if ('number' != typeof e)
              throw new F.ERR_INVALID_ARG_TYPE(t, 'number', e)
          }
          function z(e, t, r) {
            if (Math.floor(e) !== e)
              throw (
                (G(e, r),
                new F.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
              )
            if (t < 0) throw new F.ERR_BUFFER_OUT_OF_BOUNDS()
            throw new F.ERR_OUT_OF_RANGE(
              r || 'offset',
              `>= ${r ? 1 : 0} and <= ${t}`,
              e
            )
          }
          L(
            'ERR_BUFFER_OUT_OF_BOUNDS',
            function (e) {
              return e
                ? `${e} is outside of buffer bounds`
                : 'Attempt to access memory outside buffer bounds'
            },
            RangeError
          ),
            L(
              'ERR_INVALID_ARG_TYPE',
              function (e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
              },
              TypeError
            ),
            L(
              'ERR_OUT_OF_RANGE',
              function (e, t, r) {
                let n = `The value of "${e}" is out of range.`,
                  o = r
                return (
                  Number.isInteger(r) && Math.abs(r) > 2 ** 32
                    ? (o = D(String(r)))
                    : 'bigint' == typeof r &&
                      ((o = String(r)),
                      (r > BigInt(2) ** BigInt(32) ||
                        r < -(BigInt(2) ** BigInt(32))) &&
                        (o = D(o)),
                      (o += 'n')),
                  (n += ` It must be ${t}. Received ${o}`),
                  n
                )
              },
              RangeError
            )
          const V = /[^+/0-9A-Za-z-_]/g
          function H(e, t) {
            let r
            t = t || 1 / 0
            const n = e.length
            let o = null
            const i = []
            for (let a = 0; a < n; ++a) {
              if (((r = e.charCodeAt(a)), r > 55295 && r < 57344)) {
                if (!o) {
                  if (r > 56319) {
                    ;(t -= 3) > -1 && i.push(239, 191, 189)
                    continue
                  }
                  if (a + 1 === n) {
                    ;(t -= 3) > -1 && i.push(239, 191, 189)
                    continue
                  }
                  o = r
                  continue
                }
                if (r < 56320) {
                  ;(t -= 3) > -1 && i.push(239, 191, 189), (o = r)
                  continue
                }
                r = 65536 + (((o - 55296) << 10) | (r - 56320))
              } else o && (t -= 3) > -1 && i.push(239, 191, 189)
              if (((o = null), r < 128)) {
                if ((t -= 1) < 0) break
                i.push(r)
              } else if (r < 2048) {
                if ((t -= 2) < 0) break
                i.push((r >> 6) | 192, (63 & r) | 128)
              } else if (r < 65536) {
                if ((t -= 3) < 0) break
                i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
              } else {
                if (!(r < 1114112)) throw new Error('Invalid code point')
                if ((t -= 4) < 0) break
                i.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128
                )
              }
            }
            return i
          }
          function K(e) {
            return n.toByteArray(
              (function (e) {
                if (
                  (e = (e = e.split('=')[0]).trim().replace(V, '')).length < 2
                )
                  return ''
                for (; e.length % 4 != 0; ) e += '='
                return e
              })(e)
            )
          }
          function $(e, t, r, n) {
            let o
            for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
              t[o + r] = e[o]
            return o
          }
          function W(e, t) {
            return (
              e instanceof t ||
              (null != e &&
                null != e.constructor &&
                null != e.constructor.name &&
                e.constructor.name === t.name)
            )
          }
          function X(e) {
            return e != e
          }
          const Y = (function () {
            const e = '0123456789abcdef',
              t = new Array(256)
            for (let r = 0; r < 16; ++r) {
              const n = 16 * r
              for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o]
            }
            return t
          })()
          function Z(e) {
            return 'undefined' == typeof BigInt ? Q : e
          }
          function Q() {
            throw new Error('BigInt not supported')
          }
        },
        661: (e) => {
          e.exports = require('base64-js')
        },
        876: (e) => {
          e.exports = require('ieee754')
        }
      },
      t = {}
    function r(n) {
      var o = t[n]
      if (void 0 !== o) return o.exports
      var i = (t[n] = { exports: {} })
      return e[n](i, i.exports, r), i.exports
    }
    ;(r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return r.d(t, { a: t }), t
    }),
      (r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
      }),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      })
    var n = {}
    return (
      (() => {
        r.r(n),
          r.d(n, {
            CommitButton: () => Et,
            EthersProviderContext: () => Ft,
            Widget: () => zr,
            useAccount: () => Ie,
            useAccountId: () => Ce,
            useCache: () => gt,
            useInitNear: () => ue,
            useNear: () => de,
            utils: () => e
          })
        var e = {}
        r.r(e),
          r.d(e, {
            ErrorFallback: () => k,
            Loading: () => E,
            MaxGasPerTransaction: () => p,
            OneNear: () => w,
            ReactKey: () => Z,
            StorageCostPerByte: () => g,
            TGas: () => d,
            availableNearBalance: () => M,
            bigMax: () => B,
            bigMin: () => A,
            bigToString: () => U,
            computeSrcOrCode: () => ne,
            computeWritePermission: () => X,
            convertToStringLeaves: () => z,
            dateToString: () => j,
            deepCopy: () => ee,
            deepEqual: () => re,
            deepFreeze: () => Y,
            displayGas: () => P,
            displayNear: () => T,
            displayTime: () => R,
            estimateDataSize: () => L,
            extractKeys: () => D,
            filterValues: () => te,
            indexMatch: () => $,
            ipfsUpload: () => _,
            ipfsUrl: () => F,
            isArray: () => x,
            isFunction: () => O,
            isObject: () => I,
            isReactObject: () => Q,
            isString: () => C,
            isValidAccountId: () => S,
            isoDate: () => q,
            keysToCamel: () => N,
            patternMatch: () => K,
            removeDuplicates: () => J
          })
        const t = require('react')
        var o = r.n(t)
        const i = require('react-singleton-hook'),
          a = require('near-api-js'),
          s = require('big.js')
        var c = r.n(s)
        const l = require('deep-equal')
        var u = r.n(l)
        const h = require('ethers')
        var f = r(686).hp
        const d = c()(10).pow(12),
          p = d.mul(250),
          g = c()(10).pow(19),
          m = 2,
          y = 64,
          v = /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/,
          w = c()(10).pow(24),
          b = w.div(2),
          E = o().createElement('span', {
            className: 'spinner-grow spinner-grow-sm me-1',
            role: 'status',
            'aria-hidden': 'true'
          }),
          k = (e) => {
            let { error: t } = e
            return o().createElement(
              'div',
              { role: 'alert' },
              o().createElement('p', null, 'Something went wrong:'),
              o().createElement('pre', null, t.message)
            )
          }
        function S(e) {
          return e && e.length >= m && e.length <= y && e.match(v)
        }
        const x = (e) => Array.isArray(e),
          I = (e) => e === Object(e) && !x(e) && 'function' != typeof e,
          C = (e) => 'string' == typeof e,
          O = (e) => 'function' == typeof e,
          N = function (e) {
            if (I(e)) {
              const t = {}
              return (
                Object.keys(e).forEach((r) => {
                  var n
                  t[
                    ((n = r),
                    n.replace(/([-_][a-z])/gi, (e) =>
                      e.toUpperCase().replace('-', '').replace('_', '')
                    ))
                  ] = N(e[r])
                }),
                t
              )
            }
            return x(e) ? e.map((e) => N(e)) : e
          },
          A = (e, t) => (e && t ? (e.lt(t) ? e : t) : e || t),
          B = (e, t) => (e && t ? (e.gt(t) ? e : t) : e || t),
          U = (e, t, r) => {
            if (null === e) return '???'
            let n = e.toFixed(),
              o = n.indexOf('.')
            if (((t = t || 6), (r = r || 7), o > 0)) {
              let e = Math.min(t, Math.max(r - o, 0))
              e > 0 && (e += 1), o + e < n.length && (n = n.substring(0, o + e))
            } else o = n.length
            for (let e = o - 4; e >= 0; e -= 3)
              n = n.slice(0, e + 1) + ',' + n.slice(e + 1)
            return '0.000000' === n && 6 === t && 7 === r ? '<0.000001' : n
          },
          T = (e) =>
            e
              ? e.eq(1)
                ? o().createElement(
                    o().Fragment,
                    null,
                    '1 ',
                    o().createElement(
                      'span',
                      { className: 'text-secondary' },
                      'yoctoNEAR'
                    )
                  )
                : o().createElement(
                    o().Fragment,
                    null,
                    U(e.div(w)),
                    ' ',
                    o().createElement(
                      'span',
                      { className: 'text-secondary' },
                      'NEAR'
                    )
                  )
              : '???',
          P = (e) =>
            e
              ? o().createElement(
                  o().Fragment,
                  null,
                  U(e.div(d)),
                  ' ',
                  o().createElement(
                    'span',
                    { className: 'text-secondary' },
                    'TGas'
                  )
                )
              : '???',
          j = (e) =>
            e.toLocaleString('en-us', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }),
          R = (e) => e.toLocaleString(),
          M = (e) => {
            if (e && !e.loading && e.state) {
              let t = c()(e.state.amount).sub(
                c()(e.state.storage_usage).mul(c()(g))
              )
              if (t.gt(b)) return t.sub(b)
            }
            return c()(0)
          },
          q = (e) => (e ? new Date(e).toISOString().substring(0, 10) : ''),
          _ = async (e) => {
            const t = await fetch('https://ipfs.near.social/add', {
              method: 'POST',
              headers: { Accept: 'application/json' },
              body: e
            })
            return (await t.json()).cid
          },
          F = (e) => 'https://ipfs.near.social/ipfs/'.concat(e),
          L = (e, t) =>
            I(e)
              ? Object.entries(e).reduce(
                  (e, r) => {
                    let [n, o] = r
                    const i = I(t) ? t[n] : void 0
                    return (
                      e +
                      (void 0 !== i
                        ? L(o, i)
                        : 2 * n.length + L(o, void 0) + 140)
                    )
                  },
                  I(t) ? 0 : 98
                )
              : ((null == e ? void 0 : e.length) || 8) - (C(t) ? t.length : 0),
          D = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ''
            return Object.entries(e)
              .map((e) => {
                let [r, n] = e
                return I(n)
                  ? D(n, ''.concat(t).concat(r, '/'))
                  : ''.concat(t).concat(r)
              })
              .flat()
          },
          J = (e, t) => {
            const r = Object.entries(e).reduce((e, r) => {
              let [n, o] = r
              const i = I(t) ? t[n] : void 0
              if (I(o)) {
                const t = I(i) ? J(o, i) : o
                void 0 !== t && (e[n] = t)
              } else o !== i && (e[n] = o)
              return e
            }, {})
            return Object.keys(r).length ? r : void 0
          },
          G = (e) => (C(e) || null === e ? e : JSON.stringify(e)),
          z = (e) =>
            I(e)
              ? Object.entries(e).reduce((e, t) => {
                  let [r, n] = t
                  return (e[G(r)] = z(n)), e
                }, {})
              : G(e),
          V = (e, t) => {
            const r = t[0]
            let n = '**' === r
            return n
              ? 1 === t.length
              : ('*' === r || n
                  ? Object.values(e)
                  : e.hasOwnProperty(r)
                  ? [e[r]]
                  : []
                ).some((e) =>
                  I(e)
                    ? t.length > 1
                      ? V(e, t.slice(1))
                      : void 0 !== e['']
                    : 1 === t.length
                )
          },
          H = (e, t) => {
            const r = t[0]
            return (
              '*' === r ? Object.values(e) : e.hasOwnProperty(r) ? [e[r]] : []
            ).some((e) => 1 === t.length || (I(e) && H(e, t.slice(1))))
          },
          K = (e, t, r) => {
            const n = t.split('/')
            return 'get' === e ? V(r, n) : 'keys' === e && H(r, n)
          },
          $ = (e, t, r) =>
            Object.values(r).some((r) => {
              var n
              const o =
                null == r || null === (n = r.index) || void 0 === n
                  ? void 0
                  : n[e]
              try {
                return (
                  o && JSON.stringify(JSON.parse(o).key) === JSON.stringify(t)
                )
              } catch {
                return !1
              }
            }),
          W = { graph: !0, post: !0, index: !0, settings: !0 },
          X = (e, t) => {
            const r = I(e) ? JSON.parse(JSON.stringify(e)) : {}
            return (
              I(t) &&
                Object.entries(t).forEach((e) => {
                  let [t, n] = e
                  if (W.hasOwnProperty(t))
                    if (I(n)) {
                      const e = (r[t] = r[t] || {})
                      Object.keys(n).forEach((t) => {
                        e[t] = !0
                      })
                    } else r[t] = !0
                  else r[t] = !0
                }),
              r
            )
          },
          Y = (e) => (
            Object.freeze(e),
            Object.keys(e).forEach((t) => {
              ;(function (e, t) {
                return !!Object.getOwnPropertyDescriptor(e, t).get
              })(e, t) ||
                'object' != typeof e[t] ||
                Object.isFrozen(e[t]) ||
                Y(e[t])
            }),
            e
          ),
          Z = '$$typeof',
          Q = (e) => null !== e && 'object' == typeof e && !!e[Z],
          ee = (e) =>
            Array.isArray(e)
              ? e.map((e) => ee(e))
              : e instanceof Map
              ? new Map(
                  [...e.entries()].map((e) => {
                    let [t, r] = e
                    return [ee(t), ee(r)]
                  })
                )
              : e instanceof Set
              ? new Set([...e].map((e) => ee(e)))
              : f.isBuffer(e)
              ? f.from(e)
              : e instanceof URL
              ? new URL(e)
              : e instanceof File
              ? new File([e], e.name, { type: e.type })
              : e instanceof Blob
              ? new Blob([e], { type: e.type })
              : e instanceof Uint8Array || e instanceof ArrayBuffer
              ? e.slice(0)
              : e instanceof h.ethers.BigNumber
              ? e
              : e instanceof Date
              ? new Date(e)
              : e instanceof WebSocket
              ? e
              : I(e)
              ? Q(e)
                ? e
                : Object.fromEntries(
                    Object.entries(e).map((e) => {
                      let [t, r] = e
                      return [t, ee(r)]
                    })
                  )
              : void 0 === e || 'function' == typeof e
              ? e
              : JSON.parse(JSON.stringify(e)),
          te = (e) =>
            I(e)
              ? Object.fromEntries(
                  Object.entries(e).filter((e) => {
                    let [t, r] = e
                    return void 0 !== r
                  })
                )
              : e,
          re = u(),
          ne = (e, t, r) => {
            let n = e ? { src: e } : t ? { code: t } : null
            for (const e of r || []) {
              var o
              if (null !== (o = n) && void 0 !== o && o.src) {
                var i
                const t = n.src
                let r =
                  I(null == e ? void 0 : e.redirectMap) && e.redirectMap[t]
                if (!r)
                  try {
                    r = O(null == e ? void 0 : e.redirect) && e.redirect(t)
                  } catch {}
                if (C(r)) n = { src: r }
                else if (C(null === (i = r) || void 0 === i ? void 0 : i.code))
                  return { code: r.code }
              }
            }
            return n
          }
        var oe = r(686).hp
        const ie = (e, t, r, n) => ({
            type: 'FunctionCall',
            params: { methodName: e, args: t, gas: r, deposit: n }
          }),
          ae = {
            networkId: 'testnet',
            nodeUrl: 'https://rpc.testnet.near.org',
            archivalNodeUrl: 'https://rpc.testnet.internal.near.org',
            contractName: 'v1.social08.testnet',
            walletUrl: 'https://wallet.testnet.near.org',
            wrapNearAccountId: 'wrap.testnet',
            apiUrl: 'https://discovery-api.stage.testnet.near.org',
            enableWeb4FastRpc: !1
          },
          se = {
            networkId: 'mainnet',
            nodeUrl: 'https://rpc.mainnet.near.org',
            archivalNodeUrl: 'https://rpc.mainnet.internal.near.org',
            contractName: 'social.near',
            walletUrl: 'https://wallet.near.org',
            wrapNearAccountId: 'wrap.near',
            apiUrl: 'https://api.near.social',
            enableWeb4FastRpc: !1
          },
          ce = { get: !0, keys: !0 }
        async function le(e) {
          var t
          let {
            networkId: r,
            config: n,
            keyStore: o,
            selector: i,
            walletConnectCallback: s = () => {},
            customElements: l = {},
            features: u = {}
          } = e
          n || ((n = {}), r || (n.networkId = 'mainnet')),
            r && !n.networkId && (n.networkId = r),
            'mainnet' === n.networkId
              ? (n = Object.assign({}, se, n))
              : 'testnet' === n.networkId && (n = Object.assign({}, ae, n)),
            (n.walletConnectCallback = s),
            (n.customElements = Object.assign({}, n.customElements, l)),
            (o =
              null !== (t = o) && void 0 !== t
                ? t
                : new a.keyStores.BrowserLocalStorageKeyStore())
          const h = await a.connect(
              Object.assign({ deps: { keyStore: o } }, n)
            ),
            f = {
              config: n,
              selector: i,
              keyStore: o,
              nearConnection: h,
              features: u
            }
          f.nearArchivalConnection = a.Connection.fromConfig({
            networkId: n.networkId,
            provider: {
              type: 'JsonRpcProvider',
              args: { url: n.archivalNodeUrl }
            },
            signer: { type: 'InMemorySigner', keyStore: o }
          })
          const g = (e) => {
            var t
            return 'optimistic' === e || 'final' === e
              ? { finality: e, blockId: void 0 }
              : null != e
              ? { finality: void 0, blockId: parseInt(e) }
              : {
                  finality:
                    null !== (t = n.defaultFinality) && void 0 !== t
                      ? t
                      : 'optimistic',
                  blockId: void 0
                }
          }
          return (
            (f.viewCall = (e, t, r, o) => {
              const { blockId: i, finality: a } = g(o),
                s = () =>
                  (async function (e, t, r, n, o, i) {
                    o = o || {}
                    const a = await e.query({
                      request_type: 'call_function',
                      account_id: r,
                      method_name: n,
                      args_base64: oe
                        .from(JSON.stringify(o))
                        .toString('base64'),
                      block_id: t,
                      finality: i
                    })
                    return (
                      a.result &&
                      a.result.length > 0 &&
                      JSON.parse(oe.from(a.result).toString())
                    )
                  })(
                    i
                      ? f.nearArchivalConnection.provider
                      : f.nearConnection.connection.provider,
                    null != i ? i : void 0,
                    e,
                    t,
                    r,
                    a
                  ),
                c = () =>
                  'optimistic' === a && n.enableWeb4FastRpc
                    ? (async function (e, t, r, n) {
                        r = r || {}
                        const o = new URL(
                          'https://rpc.web4.near.page/account/'
                            .concat(e, '/view/')
                            .concat(t)
                        )
                        Object.entries(r).forEach((e) => {
                          let [t, r] = e
                          void 0 !== r &&
                            o.searchParams.append(
                              ''.concat(t, '.json'),
                              JSON.stringify(r)
                            )
                        })
                        try {
                          return await (await fetch(o.toString())).json()
                        } catch (e) {
                          return (
                            console.log('Web4 view call failed', o.toString()),
                            console.error(e),
                            n()
                          )
                        }
                      })(e, t, r, s)
                    : s()
              return e !== n.contractName || (!i && 'final' !== a)
                ? c()
                : (async (e, t, r, n, o) => {
                    if (!e.apiUrl || !ce.hasOwnProperty(t)) return o()
                    ;(r = r || {}), n && (r.blockHeight = n)
                    try {
                      return await (
                        await fetch(''.concat(e.apiUrl, '/').concat(t), {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(r)
                        })
                      ).json()
                    } catch (e) {
                      return (
                        console.log('API call failed', t, r),
                        console.error(e),
                        o()
                      )
                    }
                  })(n, t, r, i, c)
            }),
            (f.block = (e) => {
              const t = g(e)
              return (
                t.blockId
                  ? f.nearArchivalConnection.provider
                  : f.nearConnection.connection.provider
              ).block(t)
            }),
            (f.functionCall = (e, t, r, n, o) =>
              (async function (e, t, r, n, o, i) {
                try {
                  const a = await (await e.selector).wallet()
                  return await a.signAndSendTransaction({
                    receiverId: t,
                    actions: [
                      ie(
                        r,
                        n,
                        null != o ? o : d.mul(30).toFixed(0),
                        null != i ? i : '0'
                      )
                    ]
                  })
                } catch (e) {
                  throw e
                }
              })(f, e, t, r, n, o)),
            (f.sendTransactions = (e) =>
              (async function (e, t) {
                try {
                  const r = await (await e.selector).wallet(),
                    n = []
                  let o = c()(0)
                  return (
                    t.forEach((e) => {
                      var t
                      let {
                        contractName: r,
                        methodName: i,
                        args: a,
                        gas: s,
                        deposit: c
                      } = e
                      const l = o.add(s),
                        u = ie(i, a, s.toFixed(0), c.toFixed(0))
                      ;(null === (t = n[n.length - 1]) || void 0 === t
                        ? void 0
                        : t.receiverId) !== r || l.gt(p)
                        ? (n.push({ receiverId: r, actions: [] }), (o = s))
                        : (o = l),
                        n[n.length - 1].actions.push(u)
                    }),
                    await r.signAndSendTransactions({ transactions: n })
                  )
                } catch (e) {
                  throw e
                }
              })(f, e)),
            (f.contract = (function (e, t, r) {
              const { viewMethods: n = [], changeMethods: o = [] } = {
                  viewMethods: [
                    'storage_balance_of',
                    'get',
                    'get_num_accounts',
                    'get_accounts_paged',
                    'is_write_permission_granted',
                    'keys'
                  ],
                  changeMethods: [
                    'set',
                    'grant_write_permission',
                    'storage_deposit',
                    'storage_withdraw'
                  ]
                },
                i = { near: e, contractId: t }
              return (
                n.forEach((r) => {
                  i[r] = (n) => e.viewCall(t, r, n)
                }),
                o.forEach((r) => {
                  i[r] = (n, o, i) => e.functionCall(t, r, n, o, i)
                }),
                i
              )
            })(f, n.contractName)),
            (f.accountState = (e) =>
              (async function (e, t) {
                const r = new a.Account(e.nearConnection.connection, t)
                return await r.state()
              })(f, e)),
            f
          )
        }
        const ue = (0, i.singletonHook)({}, () => {
            const [e, r] = (0, t.useState)(null)
            return {
              nearPromise: e,
              initNear: (0, t.useMemo)(
                () => (e) => {
                  var t
                  const n =
                      (null === (t = e.config) || void 0 === t
                        ? void 0
                        : t.networkId) || e.networkId,
                    o = 'mainnet' !== n && 'testnet' !== n,
                    i =
                      'testnet' === n
                        ? e
                        : {
                            ...e,
                            networkId: 'testnet',
                            config: void 0,
                            keyStore: void 0,
                            selector: void 0
                          },
                    a =
                      'mainnet' === n
                        ? e
                        : {
                            ...e,
                            networkId: 'mainnet',
                            config: void 0,
                            keyStore: void 0,
                            selector: void 0
                          }
                  return r(
                    Promise.all([i, a].concat(o ? e : []).map(le)).then((e) =>
                      e.map((e) => ({
                        ...e,
                        default: e.config.networkId === n
                      }))
                    )
                  )
                },
                []
              )
            }
          }),
          he = [],
          fe = (0, i.singletonHook)(he, () => {
            const [e, r] = (0, t.useState)(he),
              { nearPromise: n } = ue()
            return (
              (0, t.useEffect)(() => {
                n && n.then(r)
              }, [n]),
              e
                ? {
                    default: e.find((e) => e.default),
                    testnet: e.find((e) => 'testnet' === e.config.networkId),
                    mainnet: e.find((e) => 'mainnet' === e.config.networkId)
                  }
                : e
            )
          }),
          de = (e) => fe()[e || 'default'] || null,
          pe = require('local-storage')
        var ge,
          me,
          ye,
          ve,
          we = r.n(pe)
        const be = 'near-social-vm:v01:',
          Ee = be + ':accountId:',
          ke = be + ':pretendAccountId:',
          Se = {
            loading: !0,
            signedAccountId:
              null !== (ge = we().get(Ee)) && void 0 !== ge ? ge : void 0,
            pretendAccountId:
              null !== (me = we().get(ke)) && void 0 !== me ? me : void 0,
            accountId:
              null !==
                (ye =
                  null !== (ve = we().get(ke)) && void 0 !== ve
                    ? ve
                    : we().get(Ee)) && void 0 !== ye
                ? ye
                : void 0,
            state: null,
            near: null
          },
          xe = async (e, t) => {
            var r
            const n = e.accountId
            n
              ? (we().set(Ee, n), e.config.walletConnectCallback(n))
              : we().remove(Ee)
            const o = null !== (r = we().get(ke)) && void 0 !== r ? r : void 0,
              i = {
                loading: !1,
                signedAccountId: n,
                pretendAccountId: o,
                accountId: null != o ? o : n,
                state: null,
                near: e,
                refresh: async () => await xe(e, t),
                startPretending: async (r) => {
                  r ? we().set(ke, r) : we().remove(ke), await xe(e, t)
                }
              }
            if (n) {
              const [t, r] = await Promise.all([
                e.contract.storage_balance_of({ account_id: n }),
                e.accountState(n)
              ])
              ;(i.storageBalance = t), (i.state = r)
            }
            t(i)
          },
          Ie = (0, i.singletonHook)(Se, () => {
            const [e, r] = (0, t.useState)(Se),
              n = de()
            return (
              (0, t.useEffect)(() => {
                n &&
                  n.selector.then((e) => {
                    e.store.observable.subscribe(async (e) => {
                      await (async function (e, t) {
                        var r, n, o
                        if (
                          ((e.connectedContractId =
                            null === (r = t) ||
                            void 0 === r ||
                            null === (r = r.contract) ||
                            void 0 === r
                              ? void 0
                              : r.contractId),
                          e.connectedContractId &&
                            e.connectedContractId !== e.config.contractName)
                        ) {
                          const r = await e.selector,
                            n = await r.wallet()
                          await n.signOut(),
                            (e.connectedContractId = null),
                            (t = r.store.getState())
                        }
                        if (
                          ((e.accountId =
                            null !==
                              (n =
                                null === (o = t) ||
                                void 0 === o ||
                                null === (o = o.accounts) ||
                                void 0 === o ||
                                null === (o = o[0]) ||
                                void 0 === o
                                  ? void 0
                                  : o.accountId) && void 0 !== n
                              ? n
                              : null),
                          e.accountId)
                        ) {
                          e.publicKey = null
                          try {
                            var i
                            if (
                              'here-wallet' ===
                              (null === (i = t) || void 0 === i
                                ? void 0
                                : i.selectedWalletId)
                            ) {
                              const t = we().get('herewallet:keystore')
                              e.publicKey = a.KeyPair.fromString(
                                t[e.config.networkId].accounts[e.accountId]
                              ).getPublicKey()
                            }
                          } catch (e) {
                            console.error(e)
                          }
                          if (!e.publicKey)
                            try {
                              var s
                              e.publicKey = a.KeyPair.fromString(
                                we().get(
                                  'meteor-wallet' ===
                                    (null === (s = t) || void 0 === s
                                      ? void 0
                                      : s.selectedWalletId)
                                    ? '_meteor_wallet'
                                        .concat(e.accountId, ':')
                                        .concat(e.config.networkId)
                                    : 'near-api-js:keystore:'
                                        .concat(e.accountId, ':')
                                        .concat(e.config.networkId)
                                )
                              ).getPublicKey()
                            } catch (e) {
                              console.error(e)
                            }
                        }
                      })(n, e)
                      try {
                        await xe(n, r)
                      } catch (e) {
                        console.error(e)
                      }
                    })
                  })
              }, [n]),
              e
            )
          }),
          Ce = (e) => {
            const t = de(),
              r = Ie()
            if (t && (!e || t.config.networkId === e)) return r.accountId
          },
          Oe = require('react-bootstrap/Modal')
        var Ne = r.n(Oe)
        const Ae = import('remark-gfm')
        var Be = r.n(Ae)
        const Ue = import('react-markdown')
        var Te = r.n(Ue)
        const Pe = require('react-syntax-highlighter'),
          je = import('react-syntax-highlighter/dist/esm/styles/prism'),
          Re = import('mdast-util-find-and-replace'),
          Me = /@((?:(?:[a-z\d]+[-_])*[a-z\d]+\.)*(?:[a-z\d]+[-_])*[a-z\d]+)/gi
        function qe() {
          function e(e, t, r) {
            if (
              /[\w`]/.test(r.input.charAt(r.index - 1)) ||
              /[/\w`]/.test(r.input.charAt(r.index + e.length)) ||
              t.length < 2 ||
              t.length > 64
            )
              return !1
            let n = { type: 'text', value: e }
            return (
              (n = {
                type: 'strong',
                children: [n],
                data: { hProperties: { accountId: t } }
              }),
              n
            )
          }
          return function (t) {
            return (0, Re.findAndReplace)(t, Me, e), t
          }
        }
        const _e = /#(\w+)/gi
        function Fe() {
          function e(e, t, r) {
            if (
              /[\w`]/.test(r.input.charAt(r.index - 1)) ||
              /[/\w`]/.test(r.input.charAt(r.index + e.length))
            )
              return !1
            let n = { type: 'text', value: e }
            return (
              (n = {
                type: 'strong',
                children: [n],
                data: { hProperties: { hashtag: t } }
              }),
              n
            )
          }
          return function (t) {
            return (0, Re.findAndReplace)(t, _e, e), t
          }
        }
        function Le() {
          return (
            (Le = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n])
                  }
                  return e
                }),
            Le.apply(this, arguments)
          )
        }
        const De = (e) => {
            const {
              onLink: t,
              onLinkClick: r,
              text: n,
              onMention: i,
              onHashtag: a,
              onImage: s,
              syntaxHighlighterProps: c
            } = e
            return o().createElement(Te(), {
              plugins: [],
              rehypePlugins: [],
              remarkPlugins: [Be(), qe, Fe],
              children: n,
              components: {
                strong(e) {
                  var t, r
                  let { node: n, children: s, ...c } = e
                  var l, u
                  return i &&
                    null !== (t = n.properties) &&
                    void 0 !== t &&
                    t.accountId
                    ? i(
                        null === (l = n.properties) || void 0 === l
                          ? void 0
                          : l.accountId
                      )
                    : a &&
                      null !== (r = n.properties) &&
                      void 0 !== r &&
                      r.hashtag
                    ? a(
                        null === (u = n.properties) || void 0 === u
                          ? void 0
                          : u.hashtag
                      )
                    : o().createElement('strong', c, s)
                },
                a: (e) => {
                  var n
                  let { node: i, ...a } = e
                  return t
                    ? t({
                        ...a,
                        href:
                          null === (n = i.properties) || void 0 === n
                            ? void 0
                            : n.href
                      })
                    : r
                    ? o().createElement('a', Le({ onClick: r }, a))
                    : o().createElement('a', Le({ target: '_blank' }, a))
                },
                img: (e) => {
                  let { node: t, ...r } = e
                  return s
                    ? s({ ...r })
                    : o().createElement(
                        'img',
                        Le({ className: 'img-fluid' }, r)
                      )
                },
                blockquote: (e) => {
                  let { node: t, ...r } = e
                  return o().createElement(
                    'blockquote',
                    Le({ className: 'blockquote' }, r)
                  )
                },
                table: (e) => {
                  let { node: t, ...r } = e
                  return o().createElement(
                    'table',
                    Le({ className: 'table table-striped' }, r)
                  )
                },
                code(e) {
                  let {
                    node: t,
                    inline: r,
                    className: n,
                    children: i,
                    ...a
                  } = e
                  const s = /language-(\w+)/.exec(n || ''),
                    {
                      wrapLines: l,
                      lineProps: u,
                      showLineNumbers: h,
                      lineNumberStyle: f
                    } = null != c ? c : {}
                  return !r && s
                    ? o().createElement(
                        Pe.Prism,
                        Le(
                          {
                            children: String(i).replace(/\n$/, ''),
                            style: je.tomorrow,
                            language: s[1],
                            PreTag: 'div',
                            wrapLines: l,
                            lineProps: u,
                            showLineNumbers: h,
                            lineNumberStyle: f
                          },
                          a
                        )
                      )
                    : o().createElement('code', Le({ className: n }, a), i)
                }
              }
            })
          },
          Je = require('react-uuid')
        var Ge = r.n(Je)
        const ze = (e) => {
          const t = JSON.stringify(e, null, 2)
          return '```json\n'.concat(t, '\n```')
        }
        function Ve(e) {
          const r = (0, t.useState)(Ge()()),
            n = de(e.networkId),
            [i, a] = (0, t.useState)(!1),
            s = e.onHide,
            c = e.transactions,
            l = !!c
          return o().createElement(
            Ne(),
            { size: 'xl', centered: !0, scrollable: !0, show: l, onHide: s },
            o().createElement(
              Ne().Header,
              { closeButton: !0 },
              o().createElement(Ne().Title, null, 'Confirm Transaction')
            ),
            o().createElement(
              Ne().Body,
              null,
              c &&
                c.map((e, t) =>
                  o().createElement(
                    'div',
                    { key: ''.concat(r, '-').concat(t) },
                    o().createElement(
                      'div',
                      null,
                      o().createElement('h4', null, 'Transaction #', t + 1)
                    ),
                    o().createElement(
                      'div',
                      null,
                      o().createElement(
                        'span',
                        { className: 'text-secondary' },
                        'Contract ID: '
                      ),
                      o().createElement(
                        'span',
                        { className: 'font-monospace' },
                        e.contractName
                      )
                    ),
                    o().createElement(
                      'div',
                      null,
                      o().createElement(
                        'span',
                        { className: 'text-secondary' },
                        'Method name: '
                      ),
                      o().createElement(
                        'span',
                        { className: 'font-monospace' },
                        e.methodName
                      )
                    ),
                    e.deposit &&
                      e.deposit.gt(0) &&
                      o().createElement(
                        'div',
                        null,
                        o().createElement(
                          'span',
                          { className: 'text-secondary' },
                          'Deposit: '
                        ),
                        o().createElement(
                          'span',
                          { className: 'font-monospace' },
                          T(e.deposit)
                        )
                      ),
                    o().createElement(
                      'div',
                      null,
                      o().createElement(
                        'span',
                        { className: 'text-secondary' },
                        'Gas: '
                      ),
                      o().createElement(
                        'span',
                        { className: 'font-monospace' },
                        P(e.gas)
                      )
                    ),
                    o().createElement(De, { text: ze(e.args) })
                  )
                )
            ),
            o().createElement(
              Ne().Footer,
              null,
              o().createElement(
                'button',
                {
                  className: 'btn btn-success',
                  disabled: i,
                  onClick: (e) => {
                    e.preventDefault(),
                      a(!0),
                      n.sendTransactions(c).then(() => {
                        a(!1), s()
                      })
                  }
                },
                i && E,
                ' Confirm'
              ),
              o().createElement(
                'button',
                { className: 'btn btn-secondary', onClick: s, disabled: i },
                'Close'
              )
            )
          )
        }
        const He = require('react-files')
        var Ke = r.n(He)
        const $e = require('react-infinite-scroller')
        var We = r.n($e)
        const Xe = g.mul(2e3),
          Ye = g.mul(500),
          Ze = g.mul(500),
          Qe = g.mul(500),
          et = require('react-bootstrap'),
          tt = require('idb'),
          rt = 'ViewCall',
          nt = 'Fetch',
          ot = 'LocalStorage',
          it = 'NotStarted',
          at = 'InProgress',
          st = 'Done',
          ct = 'Invalidated',
          lt = 'cache-v1'
        class ut {
          constructor() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'cacheDb',
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3e3
            ;(this.dbPromise = (0, tt.openDB)(e, 1, {
              upgrade(e) {
                e.createObjectStore(lt)
              }
            })),
              (this.cache = {}),
              (this.finalSynchronizationDelayMs = t)
          }
          invalidateCallbacks(e, t) {
            var r
            if (
              null !== (r = e.invalidationCallbacks) &&
              void 0 !== r &&
              r.length
            ) {
              const r = e.invalidationCallbacks
              ;(e.invalidationCallbacks = []),
                setTimeout(
                  () => {
                    r.forEach((e) => {
                      try {
                        e()
                      } catch {}
                    })
                  },
                  t ? this.finalSynchronizationDelayMs + 50 : 50
                )
            }
          }
          async innerGet(e) {
            return (await this.dbPromise).get(lt, e)
          }
          async innerSet(e, t) {
            return (await this.dbPromise).put(lt, t, e)
          }
          cachedPromise(e, t, r, n) {
            e = JSON.stringify(e)
            const o = this.cache[e] || {
              status: it,
              invalidationCallbacks: [],
              result: null,
              time: new Date().getTime()
            }
            if (
              ((this.cache[e] = o),
              I(r) || (r = { onInvalidate: r }),
              r.onInvalidate && o.invalidationCallbacks.push(r.onInvalidate),
              !o.subscription && r.subscribe)
            ) {
              const e = () => {
                o.subscription = setTimeout(() => {
                  document.hidden
                    ? e()
                    : ((o.subscription = null),
                      (o.status = ct),
                      this.invalidateCallbacks(o, !1))
                }, 5e3)
              }
              e()
            }
            return (
              o.status === at ||
                (o.status === st && o.time + 3e5 > new Date().getTime()) ||
                (o.status !== it ||
                  (null != n && n.ignoreCache) ||
                  this.innerGet(e).then((e) => {
                    ;(e || (null != n && n.forceCachedValue)) &&
                      o.status === at &&
                      ((o.result = e),
                      (o.time = new Date().getTime()),
                      this.invalidateCallbacks(o, !1))
                  }),
                (o.status = at),
                t &&
                  t()
                    .then((t) => {
                      ;(o.status = st),
                        (o.time = new Date().getTime()),
                        JSON.stringify(t) !== JSON.stringify(o.result) &&
                          ((o.result = t),
                          this.innerSet(e, t),
                          this.invalidateCallbacks(o, !1))
                    })
                    .catch((t) => {
                      console.error(t), (o.status = st)
                      const r = void 0
                      ;(o.time = new Date().getTime()),
                        JSON.stringify(r) !== JSON.stringify(o.result) &&
                          ((o.result = r),
                          this.innerSet(e, r),
                          this.invalidateCallbacks(o, !1))
                    })),
              o.result
            )
          }
          invalidateCache(e, t) {
            const r = [],
              n = ''.concat(e.config.apiUrl, '/index')
            Object.keys(this.cache).forEach((o) => {
              let i
              try {
                i = JSON.parse(o)
              } catch (e) {
                return void console.error('Key deserialization failed', o)
              }
              if (
                i.action === rt &&
                i.contractId === e.config.contractName &&
                (!i.blockId ||
                  'optimistic' === i.blockId ||
                  'final' === i.blockId)
              )
                try {
                  var a
                  ;(null === (a = i.args) || void 0 === a
                    ? void 0
                    : a.keys
                  ).some((e) => K(i.methodName, e, t)) &&
                    r.push([o, 'final' === i.blockId])
                } catch {}
              if (i.action === nt && i.url === n)
                try {
                  var s
                  const { action: e, key: n } = JSON.parse(
                    null === (s = i.options) || void 0 === s ? void 0 : s.body
                  )
                  e && n && $(e, n, t) && r.push([o, !0])
                } catch {}
            }),
              console.log('Cache invalidation', r),
              r.forEach((e) => {
                let [t, r] = e
                const n = this.cache[t]
                ;(n.status = ct), this.invalidateCallbacks(n, r)
              })
          }
          cachedBlock(e, t, r, n) {
            return this.cachedPromise(
              { action: 'Block', blockId: t },
              () => e.block(t),
              r,
              n
            )
          }
          cachedViewCall(e, t, r, n, o, i, a) {
            return this.cachedPromise(
              { action: rt, contractId: t, methodName: r, args: n, blockId: o },
              () => e.viewCall(t, r, n, o),
              i,
              a
            )
          }
          async asyncFetch(e, t) {
            var r, n, o, i
            const a =
              null === (r = t) ||
              void 0 === r ||
              null === (r = r.responseType) ||
              void 0 === r
                ? void 0
                : r.toLowerCase()
            t = {
              method: null === (n = t) || void 0 === n ? void 0 : n.method,
              headers: null === (o = t) || void 0 === o ? void 0 : o.headers,
              body: null === (i = t) || void 0 === i ? void 0 : i.body
            }
            try {
              const r = await fetch(e, t),
                n = r.status,
                o = r.ok,
                i = r.headers.get('content-type'),
                s = o
                  ? await ('arraybuffer' === a
                      ? r.arrayBuffer()
                      : 'blob' === a
                      ? r.blob()
                      : 'formdata' === a
                      ? r.formData()
                      : 'json' === a
                      ? r.json()
                      : 'text' === a
                      ? r.text()
                      : i && -1 !== i.indexOf('application/json')
                      ? r.json()
                      : r.text())
                  : void 0
              return { ok: o, status: n, contentType: i, body: s }
            } catch (e) {
              return { ok: !1, error: e.message }
            }
          }
          cachedFetch(e, t, r, n) {
            return this.cachedPromise(
              { action: nt, url: e, options: t },
              () => this.asyncFetch(e, t),
              r,
              n
            )
          }
          cachedCustomPromise(e, t, r, n) {
            return this.cachedPromise(
              { action: 'CustomPromise', key: e },
              () => t(),
              r,
              n
            )
          }
          socialGet(e, t, r, n, o, i, a) {
            if (!e) return null
            const s = {
              keys: (t = (t = Array.isArray(t) ? t : [t]).map((e) =>
                r ? ''.concat(e, '/**') : ''.concat(e)
              )),
              options: o
            }
            let c = this.cachedViewCall(
              e,
              e.config.contractName,
              'get',
              s,
              n,
              i,
              a
            )
            if (null === c) return null
            if (1 === t.length) {
              const e = t[0].split('/')
              for (let t = 0; t < e.length; t++) {
                var l
                const r = e[t]
                if ('*' === r || '**' === r) break
                c = null === (l = c) || void 0 === l ? void 0 : l[r]
              }
            }
            return c
          }
          socialIndex(e, t, r, n, o, i) {
            const a = this.cachedFetch(
              ''.concat(e.config.apiUrl, '/index'),
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: t, key: r, options: n })
              },
              o,
              i
            )
            return null != a && a.ok ? a.body : null
          }
          localStorageGet(e, t, r) {
            return this.cachedPromise(
              { action: ot, domain: e, key: t },
              void 0,
              r,
              { forceCachedValue: !0 }
            )
          }
          asyncLocalStorageGet(e, t) {
            return (
              (t = JSON.stringify({ action: ot, domain: e, key: t })),
              this.innerGet(t)
            )
          }
          localStorageSet(e, t, r) {
            t = JSON.stringify({ action: ot, domain: e, key: t })
            const n = this.cache[t] || {
              status: it,
              invalidationCallbacks: [],
              result: null,
              time: new Date().getTime()
            }
            ;(this.cache[t] = n),
              (n.status = st),
              JSON.stringify(r) !== JSON.stringify(n.result) &&
                ((n.result = r),
                this.innerSet(t, r),
                this.invalidateCallbacks(n, !1))
          }
          cachedEthersCall(e, t, r, n, o) {
            return e
              ? this.cachedPromise(
                  { action: 'EthersCall', callee: t, args: r },
                  () => e[t](...r),
                  n,
                  o
                )
              : null
          }
        }
        const ht = new ut(),
          ft = new ut('secondaryCacheDb'),
          dt = (0, i.singletonHook)(ht, () => ht),
          pt = (0, i.singletonHook)(ft, () => ft),
          gt = (e) => {
            const t = de(),
              r = dt(),
              n = pt()
            return e && e !== t.config.networkId ? n : r
          }
        function mt() {
          return (
            (mt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n])
                  }
                  return e
                }),
            mt.apply(this, arguments)
          )
        }
        const yt = (e) => {
            const t = JSON.stringify(e, null, 2)
            return '```json\n'.concat(t, '\n```')
          },
          vt = { page: 'commit' },
          wt = 'write_permission',
          bt = (e) => {
            var r
            const n = de(e.networkId),
              i = Ce(e.networkId),
              a = gt(),
              [s, l] = (0, t.useState)(!1),
              [u, h] = (0, t.useState)(0),
              [f, p] = (0, t.useState)(!1),
              [m, y] = (0, t.useState)(null),
              [v, w] = (0, t.useState)(null),
              [b, k] = (0, t.useState)(null),
              [S, x] = (0, t.useState)(!0),
              I = e.show,
              C = e.onHide,
              O = () => {
                if (e.onCancel)
                  try {
                    e.onCancel()
                  } catch (e) {
                    console.error(e)
                  }
                C()
              },
              N = e.data,
              A = e.force,
              U = e.widgetSrc
            ;(0, t.useEffect)(() => {
              U
                ? (k(null),
                  a
                    .asyncLocalStorageGet(vt, {
                      widgetSrc: U,
                      accountId: i,
                      type: wt
                    })
                    .then((e) => k(e)))
                : k(!1)
            }, [U, i, a, I]),
              (0, t.useEffect)(() => {
                x(!1 !== b)
              }, [b]),
              (0, t.useEffect)(() => {
                if (f || !I || !i || !n) return
                const e = JSON.stringify(null != N ? N : null)
                ;(A || e !== m) &&
                  (y(e),
                  w(null),
                  (async (e, t, r, n) => {
                    await e.selector
                    const o = e.accountId
                    if (!o)
                      return void alert(
                        "You're not logged in. Sign in to commit data."
                      )
                    const [i, a] = await Promise.all([
                        e.viewCall(
                          e.config.contractName,
                          'get_account_storage',
                          { account_id: o }
                        ),
                        o !== t
                          ? e.viewCall(
                              e.config.contractName,
                              'is_write_permission_granted',
                              { predecessor_id: o, key: t }
                            )
                          : Promise.resolve(!0)
                      ]),
                      s = c()((null == i ? void 0 : i.available_bytes) || '0')
                    let l = { [t]: z(r) },
                      u = {}
                    n ||
                      ((u = await (async (e, t) => {
                        const r = D(t)
                        return await e.contract.get({ keys: r })
                      })(e, l)),
                      (l = J(l, u)))
                    const h = g
                        .mul(L(l, u))
                        .add(i ? c()(0) : Ye)
                        .add(a ? c()(0) : Qe)
                        .add(Ze),
                      f = B(h.sub(s.mul(g)), i ? (a ? c()(0) : c()(1)) : Xe)
                    return {
                      originalData: r,
                      accountId: t,
                      accountStorage: i,
                      availableBytes: s,
                      currentData: u,
                      data: l,
                      expectedDataBalance: h,
                      deposit: f,
                      permissionGranted: a
                    }
                  })(n, i, N, A).then(w))
              }, [f, N, m, A, n, i, I])
            const P = async () => {
                p(!0)
                const t = S && X(b, v.data[i])
                a.localStorageSet(
                  vt,
                  { widgetSrc: U, accountId: i, type: wt },
                  t
                ),
                  k(t)
                const r = v.deposit.add(g.mul(u))
                if (
                  (v.permissionGranted
                    ? await (async (e, t, r) => (
                        console.log('Committing data', t),
                        await e.contract.set(
                          { data: t },
                          d.mul(100).toFixed(0),
                          r.toFixed(0)
                        )
                      ))(n, v.data, r)
                    : i === n.accountId
                    ? await (async (e, t, r) => {
                        const n = await (await e.selector).wallet(),
                          o = []
                        return (
                          e.publicKey &&
                            (o.push(
                              ie(
                                'grant_write_permission',
                                {
                                  public_key: e.publicKey.toString(),
                                  keys: [e.accountId]
                                },
                                d.mul(100).toFixed(0),
                                r.gt(0) ? r.toFixed(0) : '1'
                              )
                            ),
                            (r = c()(0))),
                          o.push(
                            ie(
                              'set',
                              { data: t },
                              d.mul(100).toFixed(0),
                              r.gt(0) ? r.toFixed(0) : '1'
                            )
                          ),
                          await n.signAndSendTransaction({
                            receiverId: e.config.contractName,
                            actions: o
                          })
                        )
                      })(n, v.data, r)
                    : alert('No permission to commit under given account'),
                  w(null),
                  y(null),
                  e.onCommit)
                )
                  try {
                    e.onCommit(v.data)
                  } catch (e) {
                    console.error(e)
                  }
                a.invalidateCache(n, v.data), C(), p(!1)
              },
              j = v && !v.permissionGranted && i !== n.accountId
            !f &&
              !j &&
              !s &&
              v &&
              I &&
              b &&
              v.data &&
              v.deposit.add(g.mul(u)).eq(0) &&
              v.permissionGranted &&
              JSON.stringify(X(b, v.data[i])) === JSON.stringify(b) &&
              (l(!0), P().then(() => l(!1)))
            const R = !!v && I && !s && null !== b
            return o().createElement(
              Ne(),
              { size: 'xl', centered: !0, scrollable: !0, show: R, onHide: O },
              o().createElement(
                Ne().Header,
                { closeButton: !0 },
                o().createElement(Ne().Title, null, 'Saving data')
              ),
              o().createElement(
                Ne().Body,
                null,
                j
                  ? o().createElement(
                      'div',
                      null,
                      o().createElement(
                        'h5',
                        null,
                        "Can't commit, because the account ",
                        n.accountId,
                        " doesn't have permission to write under pretended account ",
                        i
                      )
                    )
                  : v
                  ? o().createElement(
                      'div',
                      null,
                      o().createElement(
                        'div',
                        null,
                        v.data
                          ? o().createElement(De, { text: yt(v.data) })
                          : o().createElement('h5', null, 'No new data to save')
                      ),
                      v.data &&
                        (null == v || null === (r = v.deposit) || void 0 === r
                          ? void 0
                          : r.gt(0)) &&
                        o().createElement(
                          'div',
                          null,
                          o().createElement(
                            'h6',
                            null,
                            'Required storage deposit',
                            ' ',
                            o().createElement(
                              'small',
                              { className: 'text-secondary' },
                              '(can be recovered later)'
                            )
                          ),
                          o().createElement(
                            'div',
                            { className: 'mb-2' },
                            v.deposit.div(g).toFixed(0),
                            ' bytes =',
                            ' ',
                            T(v.deposit)
                          ),
                          o().createElement(
                            'h6',
                            null,
                            'Optional storage deposit',
                            ' ',
                            o().createElement(
                              'small',
                              { className: 'text-secondary' },
                              '(can be used to avoid future wallet TX confirmation)'
                            )
                          ),
                          o().createElement(
                            'div',
                            null,
                            o().createElement(
                              et.ToggleButtonGroup,
                              {
                                type: 'radio',
                                name: 'storageDeposit',
                                value: u,
                                onChange: h,
                                disabled: f
                              },
                              o().createElement(
                                et.ToggleButton,
                                {
                                  id: 'esd-0',
                                  variant: 'outline-success',
                                  value: 0
                                },
                                'No Deposit'
                              ),
                              o().createElement(
                                et.ToggleButton,
                                {
                                  id: 'esd-5000',
                                  variant: 'outline-success',
                                  value: 5e3
                                },
                                '0.05 NEAR (5Kb)'
                              ),
                              o().createElement(
                                et.ToggleButton,
                                {
                                  id: 'esd-20000',
                                  variant: 'outline-success',
                                  value: 2e4
                                },
                                '0.2 NEAR (20Kb)'
                              ),
                              o().createElement(
                                et.ToggleButton,
                                {
                                  id: 'esd-100000',
                                  variant: 'outline-success',
                                  value: 1e5
                                },
                                '1 NEAR (100Kb)'
                              )
                            )
                          )
                        ),
                      !j &&
                        U &&
                        v.data &&
                        o().createElement(
                          'div',
                          { className: 'form-check form-switch' },
                          o().createElement('input', {
                            className: 'form-check-input',
                            type: 'checkbox',
                            role: 'switch',
                            id: 'dont-ask-for-widget',
                            checked: S,
                            onChange: (e) => {
                              x(e.target.checked)
                            }
                          }),
                          o().createElement(
                            'label',
                            {
                              className: 'form-check-label',
                              htmlFor: 'dont-ask-for-widget'
                            },
                            "Don't ask again for saving similar data by",
                            ' ',
                            o().createElement(
                              'span',
                              { className: 'font-monospace' },
                              U
                            )
                          )
                        )
                    )
                  : E
              ),
              o().createElement(
                Ne().Footer,
                null,
                o().createElement(
                  'button',
                  {
                    className: 'btn btn-success',
                    disabled: !(null != v && v.data) || f || j,
                    onClick: (e) => {
                      e.preventDefault(), P()
                    }
                  },
                  f && E,
                  ' Save Data'
                ),
                o().createElement(
                  'button',
                  { className: 'btn btn-secondary', onClick: O, disabled: f },
                  'Close'
                )
              )
            )
          },
          Et = (e) => {
            const r = Ce(e.networkId),
              {
                data: n,
                children: i,
                onClick: a,
                onCommit: s,
                onCancel: c,
                disabled: l,
                widgetSrc: u,
                force: h,
                ...f
              } = e,
              [d, p] = (0, t.useState)(null)
            return o().createElement(
              o().Fragment,
              null,
              o().createElement(
                'button',
                mt({}, f, {
                  disabled: l || !n || !!d || !r,
                  onClick: (e) => {
                    e.preventDefault(),
                      p('function' == typeof n ? n() : n),
                      a && a()
                  }
                }),
                !!d && E,
                i
              ),
              o().createElement(bt, {
                show: !!d,
                widgetSrc: u,
                data: d,
                force: h,
                onHide: () => p(null),
                onCancel: c,
                onCommit: s
              })
            )
          },
          kt = require('react-bootstrap-typeahead'),
          St = require('styled-components')
        var xt = r.n(St)
        const It = require('elliptic'),
          Ct = require('bn.js')
        var Ot = r.n(Ct)
        const Nt = require('tweetnacl'),
          At = require('iframe-resizer-react')
        var Bt = r.n(At)
        function Ut() {
          return (
            (Ut = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n])
                  }
                  return e
                }),
            Ut.apply(this, arguments)
          )
        }
        function Tt(e) {
          const {
              className: r,
              id: n,
              style: i,
              src: a,
              srcDoc: s,
              title: c,
              message: l,
              onLoad: u,
              onMessage: h,
              iframeResizer: f
            } = e,
            d = { className: r, id: n, style: i, src: a, srcDoc: s, title: c },
            [p, g] = (0, t.useState)(!1),
            [m, y] = (0, t.useState)(void 0),
            v = o().useRef(),
            w = 'allow-scripts',
            b = (0, t.useCallback)(
              (e) => {
                e.source === v.current.contentWindow && h && h(e.data)
              },
              [v, h]
            ),
            E = () => {
              g(!0), u && u()
            }
          return (
            (0, t.useEffect)(
              () => (
                window.addEventListener('message', b, !1),
                () => {
                  window.removeEventListener('message', b, !1)
                }
              ),
              [b]
            ),
            (0, t.useEffect)(() => {
              if (v.current && p && !re(m, l)) {
                if ((y(ee(l)), f)) return void v.current.sendMessage(l, '*')
                v.current.contentWindow.postMessage(l, '*')
              }
            }, [l, v, p, m]),
            (0, t.useEffect)(() => {
              g(!1)
            }, [a, s]),
            f
              ? o().createElement(
                  Bt(),
                  Ut(
                    {},
                    (() => {
                      const e = {
                          ...d,
                          style:
                            null != i ? i : { width: '1px', minWidth: '100%' },
                          checkOrigin: !1
                        },
                        t = 'object' == typeof f ? f : {},
                        r = [
                          'log',
                          'autoResize',
                          'bodyBackground',
                          'bodyMargin',
                          'bodyPadding',
                          'inPageLinks',
                          'heightCalculationMethod',
                          'maxHeight',
                          'maxWidth',
                          'minHeight',
                          'minWidth',
                          'minWidth',
                          'resizeFrom',
                          'scrolling',
                          'sizeHeight',
                          'sizeWidth',
                          'tolerance',
                          'widthCalculationMethod'
                        ]
                      return (
                        Object.keys(t).forEach((n) => {
                          r.includes(n) && (e[n] = t[n])
                        }),
                        t.onResized &&
                          (e.onResized = (e) => {
                            let { height: r, width: n } = e
                            t.onResized({ height: r, width: n })
                          }),
                        e
                      )
                    })(),
                    { forwardRef: v, sandbox: w, onLoad: E }
                  )
                )
              : o().createElement(
                  'iframe',
                  Ut({}, d, { ref: v, sandbox: w, onLoad: E })
                )
          )
        }
        const Pt = require('nanoid'),
          jt = require('lodash.clonedeep')
        var Rt = r.n(jt)
        const Mt = require('acorn'),
          qt = require('acorn-jsx')
        var _t = r.n(qt)
        const Ft = o().createContext(null),
          Lt = (e) => {
            var r, n, i
            const a = (0, t.useContext)(Ft),
              [{ wallet: s, connecting: c }, l, u] =
                null != a && a.useConnectWallet
                  ? null == a
                    ? void 0
                    : a.useConnectWallet()
                  : [{}]
            return o().createElement(
              'button',
              {
                className: 'btn '
                  .concat(e.className, ' ')
                  .concat(
                    c || s ? 'btn-outline-secondary' : 'btn-outline-primary'
                  ),
                disabled: (s ? !u : !l) || c,
                onClick: () =>
                  s ? (null == u ? void 0 : u(s)) : null == l ? void 0 : l()
              },
              c
                ? null !== (r = e.connectingLabel) && void 0 !== r
                  ? r
                  : 'Connecting'
                : s
                ? null !== (n = e.disconnectLabel) && void 0 !== n
                  ? n
                  : 'Disconnect Web3 Wallet'
                : null !== (i = e.connectLabel) && void 0 !== i
                ? i
                : 'Connect Web3 Wallet'
            )
          },
          Dt = require('dompurify'),
          Jt = require('@urbit/http-api')
        var Gt = r.n(Jt)
        const zt = require('@radix-ui/react-accordion'),
          Vt = require('@radix-ui/react-alert-dialog'),
          Ht = require('@radix-ui/react-aspect-ratio'),
          Kt = require('@radix-ui/react-avatar'),
          $t = require('@radix-ui/react-checkbox'),
          Wt = require('@radix-ui/react-collapsible'),
          Xt = require('@radix-ui/react-context-menu'),
          Yt = require('@radix-ui/react-dialog'),
          Zt = require('@radix-ui/react-dropdown-menu'),
          Qt = require('@radix-ui/react-hover-card'),
          er = require('@radix-ui/react-label'),
          tr = require('@radix-ui/react-menubar'),
          rr = require('@radix-ui/react-navigation-menu'),
          nr = require('@radix-ui/react-popover'),
          or = require('@radix-ui/react-progress'),
          ir = require('@radix-ui/react-radio-group'),
          ar = require('@radix-ui/react-scroll-area'),
          sr = require('@radix-ui/react-select'),
          cr = require('@radix-ui/react-separator'),
          lr = require('@radix-ui/react-slider'),
          ur = require('@radix-ui/react-switch'),
          hr = require('@radix-ui/react-tabs'),
          fr = require('@radix-ui/react-toast'),
          dr = require('@radix-ui/react-toggle'),
          pr = require('@radix-ui/react-toggle-group'),
          gr = require('@radix-ui/react-toolbar'),
          mr = require('@radix-ui/react-tooltip')
        var yr = r(686).hp
        function vr() {
          return (
            (vr = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n])
                  }
                  return e
                }),
            vr.apply(this, arguments)
          )
        }
        const wr = 'state',
          br = 'private',
          Er = 'public',
          kr = {
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            div: !0,
            span: !0,
            strong: !0,
            sub: !0,
            sup: !0,
            pre: !0,
            i: !0,
            b: !0,
            p: !0,
            input: !0,
            button: !0,
            fieldset: !0,
            ul: !0,
            ol: !0,
            li: !0,
            table: !0,
            tr: !0,
            th: !0,
            td: !0,
            thead: !0,
            tbody: !0,
            tfoot: !0,
            br: !1,
            hr: !1,
            img: !1,
            textarea: !0,
            select: !0,
            option: !0,
            label: !0,
            small: !0,
            svg: !0,
            animate: !1,
            animateMotion: !1,
            animateTransform: !1,
            defs: !0,
            circle: !0,
            clipPath: !0,
            ellipse: !0,
            g: !0,
            image: !1,
            line: !0,
            linearGradient: !0,
            marker: !0,
            mask: !0,
            mpath: !1,
            path: !0,
            pattern: !0,
            polygon: !0,
            polyline: !0,
            radialGradient: !0,
            rect: !0,
            set: !1,
            stop: !1,
            symbol: !0,
            text: !0,
            textPath: !0,
            tspan: !0,
            use: !1,
            a: !0
          },
          Sr = {
            Accordion: zt,
            AlertDialog: Vt,
            AspectRatio: Ht,
            Avatar: Kt,
            Checkbox: $t,
            Collapsible: Wt,
            ContextMenu: Xt,
            Dialog: Yt,
            DropdownMenu: Zt,
            HoverCard: Qt,
            Label: er,
            Menubar: tr,
            NavigationMenu: rr,
            Popover: nr,
            Progress: or,
            RadioGroup: ir,
            ScrollArea: ar,
            Select: sr,
            Separator: cr,
            Slider: lr,
            Switch: ur,
            Tabs: hr,
            Toast: fr,
            Toggle: dr,
            ToggleGroup: pr,
            Toolbar: gr,
            Tooltip: mr
          },
          xr = {
            ...kr,
            Widget: !1,
            CommitButton: !0,
            IpfsImageUpload: !1,
            Markdown: !1,
            Fragment: !0,
            InfiniteScroll: !0,
            Typeahead: !1,
            Tooltip: !0,
            OverlayTrigger: !0,
            Files: !0,
            iframe: !1,
            Web3Connect: !1
          },
          Ir = { styled: !0 },
          Cr = Y(
            Rt()({
              encodeURIComponent,
              decodeURIComponent,
              isNaN,
              parseInt,
              parseFloat,
              isFinite,
              btoa: (e) => btoa(e),
              atob: (e) => atob(e),
              decodeURI,
              encodeURI,
              nacl: {
                randomBytes: Nt.randomBytes,
                secretbox: Nt.secretbox,
                scalarMult: Nt.scalarMult,
                box: Nt.box,
                sign: Nt.sign,
                hash: Nt.hash,
                verify: Nt.verify
              },
              ethers: {
                utils: h.ethers.utils,
                BigNumber: h.ethers.BigNumber,
                Contract: h.ethers.Contract,
                providers: h.ethers.providers
              },
              nanoid: { nanoid: Pt.nanoid, customAlphabet: Pt.customAlphabet },
              Promise,
              Date,
              Number,
              String,
              Big: c(),
              Math,
              Buffer: yr,
              Audio,
              Image,
              File,
              Blob,
              FileReader,
              URL,
              Array,
              BN: Ot(),
              Uint8Array,
              Map,
              Set
            })
          ),
          Or = {
            [Z]: !0,
            constructor: !0,
            prototype: !0,
            __proto__: !0,
            __defineGetter__: !0,
            __defineSetter__: !0,
            __lookupGetter__: !0,
            __lookupSetter__: !0
          },
          Nr = { ecmaVersion: 13, allowReturnOutsideFunction: !0 },
          Ar = new Map(),
          Br = Mt.Parser.extend(_t()()),
          Ur = (e) => {
            if (!0 === Or[e])
              throw new Error(''.concat(e, " is reserved and can't be used"))
          },
          Tr = (e) => {
            if (Q(e)) throw new Error("React objects shouldn't dereferenced")
          },
          Pr = (e) => {
            null !== e &&
              'object' == typeof e &&
              Object.entries(e).forEach((e) => {
                let [t, r] = e
                Ur(t), Pr(r)
              })
          },
          jr = (e) => {
            if (!e) return
            if (!Object.keys(Sr).includes(e.split('.')[0])) return
            const t = e.split('.').reduce((e, t) => e[t], Sr)
            if (void 0 === t)
              throw new Error('"'.concat(e, '" is not a valid Radix component'))
            return t
          },
          Rr = (e, t) =>
            e && (null == t || 'final' === t || 'optimistic' === t),
          Mr = (e) => {
            if ('Identifier' !== e.type)
              throw new Error('Non identifier: ' + e.type)
            const t = e.name
            if ((Ur(t), Ir.hasOwnProperty(t)))
              throw new Error('Cannot use keyword: ' + t)
            return { type: 'Identifier', name: t }
          },
          qr = (e) => {
            if ('JSXIdentifier' !== e.type)
              throw new Error('Non JSXIdentifier: ' + e.type)
            return e.name
          },
          _r = (e) => {
            if ('JSXIdentifier' === e.type) return e.name
            if ('JSXMemberExpression' === e.type)
              return _r(e.object) + '.' + qr(e.property)
            throw new Error(
              'Non JSXIdentifier or JSXMemberExpression: ' + e.type
            )
          },
          Fr = (e) => {
            if ('Identifier' === e.type) return Mr(e)
            if ('ArrayPattern' === e.type)
              return { type: 'ArrayPattern', elements: e.elements.map(Fr) }
            if ('ObjectPattern' === e.type)
              return {
                type: 'ObjectPattern',
                properties: e.properties.map((e) => {
                  if ('Property' === e.type)
                    return { key: Mr(e.key), value: Fr(e.value) }
                  if ('RestElement' === e.type)
                    return { type: 'RestElement', argument: Mr(e.argument) }
                  throw new Error('Unknown property type: ' + e.type)
                })
              }
            if ('RestElement' === e.type)
              return { type: 'RestElement', argument: Mr(e.argument) }
            throw new Error('Unknown pattern: ' + e.type)
          }
        class Lr {
          constructor(e, t) {
            ;(this.prevStack = e), (this.state = t)
          }
          findObj(e) {
            return this.state.hasOwnProperty(e)
              ? this.state
              : this.prevStack
              ? this.prevStack.findObj(e)
              : void 0
          }
          get(e) {
            return this.state.hasOwnProperty(e)
              ? this.state[e]
              : this.prevStack
              ? this.prevStack.get(e)
              : void 0
          }
        }
        class Dr {
          constructor(e, t, r, n) {
            ;(this.gIndex = 0),
              (this.hookIndex = 0),
              (this.vm = e),
              (this.isTrusted = !!n),
              (this.stack = new Lr(t, r))
          }
          newStack(e) {
            return new Dr(this.vm, this.stack, {}, this.isTrusted || !!e)
          }
          executeExpression(e) {
            return this.executeExpressionInternal(e)
          }
          renderElement(e) {
            var t, r
            let n =
                'JSXFragment' === e.type
                  ? 'Fragment'
                  : _r(e.openingElement.name),
              i = xr[n],
              a = null
            void 0 === i &&
              this.vm.near.config.customElements.hasOwnProperty(n) &&
              ((i = !0), (a = this.vm.near.config.customElements[n]))
            const s = jr(n),
              c = void 0 === i && this.executeExpression(e.openingElement.name)
            if (void 0 === i && !s) {
              if (void 0 === c) throw new Error('Unknown element: ' + n)
              if (!(0, St.isStyledComponent)(c) && 'function' != typeof c)
                throw new Error('Unsupported component: ' + n)
            }
            let l = {}
            const u = {}
            'input' === n
              ? (l.className = 'form-control')
              : 'CommitButton' === n
              ? (l.className = 'btn btn-success')
              : 'button' === n
              ? (l.className = 'btn btn-primary')
              : 'IpfsImageUpload' === n &&
                (l.className = 'btn btn-outline-primary')
            const h = {}
            var f
            ;('JSXFragment' === e.type
              ? e.openingFragment
              : e.openingElement
            ).attributes.forEach((e) => {
              if ('JSXAttribute' === e.type) {
                const t = qr(e.name)
                ;(l[t] = null === e.value || this.executeExpression(e.value)),
                  ('value' !== t && 'image' !== t && 'onChange' !== t) ||
                    (h[t] = e.value)
              } else {
                if ('JSXSpreadAttribute' !== e.type)
                  throw new Error('Unknown attribute type: ' + e.type)
                {
                  const t = this.executeExpression(e.argument)
                  Object.assign(l, t)
                }
              }
            }),
              'forwardedRef' === l.ref &&
                (l = { ...l, ...this.vm.forwardedProps }),
              Object.entries(h).forEach((e) => {
                let [t, r] = e
                if (
                  'value' !== t ||
                  'input' !== n ||
                  'text' !== l.type ||
                  'JSXExpressionContainer' !== r.type ||
                  'onChange' in h
                ) {
                  if (
                    'image' === t &&
                    'IpfsImageUpload' === n &&
                    'JSXExpressionContainer' === r.type
                  ) {
                    const { obj: e, key: t } = this.resolveMemberExpression(
                      r.expression,
                      { requireState: !0, left: !0 }
                    )
                    ;(u.img = e[t]),
                      (l.onChange = (n) => {
                        ;(null == n ? void 0 : n.length) > 0
                          ? ((e[t] = { uploading: !0, cid: null }),
                            this.vm.setReactState(this.vm.state.state),
                            _(n[0]).then((e) => {
                              if (!this.vm.alive) return
                              const { obj: t, key: n } =
                                this.vm.vmStack.resolveMemberExpression(
                                  r.expression,
                                  { requireState: !0, left: !0 }
                                )
                              ;(t[n] = { cid: e }),
                                this.vm.setReactState(this.vm.state.state)
                            }))
                          : ((e[t] = null),
                            this.vm.setReactState(this.vm.state.state))
                      })
                  }
                } else {
                  const { obj: e, key: t } = this.resolveMemberExpression(
                    r.expression,
                    { requireState: !0, left: !0 }
                  )
                  ;(l.value = (null == e ? void 0 : e[t]) || ''),
                    (l.onChange = (r) => {
                      r.preventDefault(),
                        (e[t] = r.target.value),
                        this.vm.setReactState(this.vm.state.state)
                    })
                }
              }),
              (l.key =
                null !== (t = l.key) && void 0 !== t
                  ? t
                  : ''
                      .concat(this.vm.widgetSrc, '-')
                      .concat(n, '-')
                      .concat(this.vm.gIndex)),
              1 ==
                (null === (r = this.vm.near) ||
                void 0 === r ||
                null === (r = r.features) ||
                void 0 === r
                  ? void 0
                  : r.enableComponentSrcDataKey) &&
                (l['data-component'] =
                  null !== (f = l['data-component']) && void 0 !== f
                    ? f
                    : this.vm.widgetSrc),
              delete l.dangerouslySetInnerHTML,
              delete l.is
            const d =
              ((0, St.isStyledComponent)(c) &&
                (null == c ? void 0 : c.target)) ||
              n
            var p
            if (
              (l.as && !kr[l.as] && delete l.as,
              l.forwardedAs && !kr[l.forwardedAs] && delete l.forwardedAs,
              'img' === d
                ? (l.alt =
                    null !== (p = l.alt) && void 0 !== p ? p : 'not defined')
                : 'a' === d
                ? Object.entries(l).forEach((e) => {
                    let [t, r] = e
                    'href' === t.toLowerCase() &&
                      (l[t] = (0, Dt.isValidAttribute)('a', 'href', r)
                        ? r
                        : 'about:blank')
                  })
                : 'Widget' === n
                ? ((l.depth = this.vm.depth + 1),
                  (l.config = [l.config, ...this.vm.widgetConfigs].filter(
                    Boolean
                  )))
                : 'CommitButton' === n && (l.networkId = this.vm.networkId),
              !1 === i && e.children.length)
            )
              throw new Error(
                "And element '" + n + "' contains children, but shouldn't"
              )
            const g = e.children.map(
              (e, t) => ((this.vm.gIndex = t), this.executeExpression(e))
            )
            if (a) return a({ ...l, children: g })
            if (c)
              return (0, St.isStyledComponent)(c)
                ? o().createElement(c, { ...l }, ...g)
                : c({ children: g, ...l })
            if ('Widget' === n) return o().createElement(zr, l)
            if ('CommitButton' === n)
              return o().createElement(
                Et,
                vr({}, l, { widgetSrc: this.vm.widgetSrc }),
                g
              )
            if ('InfiniteScroll' === n) return o().createElement(We(), l, g)
            if ('Tooltip' === n) return o().createElement(et.Tooltip, l, g)
            if ('OverlayTrigger' === n)
              return o().createElement(
                et.OverlayTrigger,
                l,
                g.filter((e) => !C(e) || !!e.trim())[0]
              )
            if ('Typeahead' === n) return o().createElement(kt.Typeahead, l)
            if ('Markdown' === n) return o().createElement(De, l)
            if ('Fragment' === n) return o().createElement(o().Fragment, l, g)
            var m, y, v, w
            if ('IpfsImageUpload' === n)
              return o().createElement(
                'div',
                { className: 'd-inline-block', key: l.key },
                (null === (m = u.img) || void 0 === m ? void 0 : m.cid) &&
                  o().createElement(
                    'div',
                    {
                      className:
                        'd-inline-block me-2 overflow-hidden align-middle',
                      style: { width: '2.5em', height: '2.5em' }
                    },
                    o().createElement('img', {
                      className: 'rounded w-100 h-100',
                      style: { objectFit: 'cover' },
                      src: F(
                        null === (y = u.img) || void 0 === y ? void 0 : y.cid
                      ),
                      alt: 'upload preview'
                    })
                  ),
                o().createElement(
                  Ke(),
                  vr(
                    {
                      multiple: !1,
                      accepts: ['image/*'],
                      minFileSize: 1,
                      clickable: !0
                    },
                    l
                  ),
                  null !== (v = u.img) && void 0 !== v && v.uploading
                    ? o().createElement(o().Fragment, null, E, ' Uploading')
                    : null !== (w = u.img) && void 0 !== w && w.cid
                    ? 'Replace'
                    : 'Upload an Image'
                )
              )
            if ('Files' === n) return o().createElement(Ke(), l, g)
            if ('iframe' === n) return o().createElement(Tt, l)
            if ('Web3Connect' === n) return o().createElement(Lt, l)
            if (s) {
              if (n.includes('Portal'))
                throw new Error(
                  'Radix\'s "'.concat(
                    n,
                    '" component is not allowed. This portal element is an optional Radix feature and isn\'t necessary for most use cases.'
                  )
                )
              let e = g
              return (
                Array.isArray(e) &&
                  ((e = e.filter(
                    (e) => 'string' != typeof e || '' !== e.trim()
                  )),
                  1 === e.length ? (e = e[0]) : 0 === e.length && (e = void 0)),
                o().createElement(s, l, e)
              )
            }
            if (!0 === i) return o().createElement(n, { ...l }, ...g)
            if (!1 === i) return o().createElement(n, { ...l })
            throw new Error('Unsupported element: ' + n)
          }
          resolveKey(e, t) {
            const r =
              t || ('Identifier' !== e.type && 'JSXIdentifier' !== e.type)
                ? this.executeExpression(e)
                : e.name
            return Ur(r), r
          }
          resolveMemberExpression(e, t) {
            if ('Identifier' === e.type || 'JSXIdentifier' === e.type) {
              var r
              const n = e.name
              if ((Ur(n), null != t && t.requireState && n !== wr))
                throw new Error('The top object should be '.concat(wr))
              const o =
                null !== (r = this.stack.findObj(n)) && void 0 !== r
                  ? r
                  : this.stack.state
              if ((Tr(o), o === this.stack.state && Ir.hasOwnProperty(n))) {
                if (null != t && t.left)
                  throw new Error("Cannot assign to keyword '" + n + "'")
                return { obj: o, key: n, keyword: n }
              }
              if (null != t && t.left && (!o || !o.hasOwnProperty(n)))
                throw new Error(
                  "Accessing undeclared identifier '".concat(e.name, "'")
                )
              return { obj: o, key: n }
            }
            if (
              'MemberExpression' === e.type ||
              'JSXMemberExpression' === e.type
            ) {
              var n, o
              if (
                'Identifier' ===
                  (null === (n = e.object) || void 0 === n ? void 0 : n.type) ||
                'JSXIdentifier' ===
                  (null === (o = e.object) || void 0 === o ? void 0 : o.type)
              ) {
                const r = e.object.name
                if (Ir.hasOwnProperty(r)) {
                  if (null == t || !t.callee)
                    throw new Error(
                      "Cannot dereference keyword '" +
                        r +
                        "' in non-call expression"
                    )
                  return {
                    obj: this.stack.state,
                    key: this.resolveKey(e.property, e.computed),
                    keyword: r
                  }
                }
              }
              const r = this.executeExpression(e.object)
              return (
                Tr(r), { obj: r, key: this.resolveKey(e.property, e.computed) }
              )
            }
            throw new Error("Unsupported member type: '" + e.type + "'")
          }
          getArray(e) {
            const t = []
            return (
              e.forEach((e) => {
                'SpreadElement' === e.type
                  ? t.push(...this.executeExpression(e.argument))
                  : t.push(this.executeExpression(e))
              }),
              t
            )
          }
          executeExpressionInternal(e) {
            if (!e) return null
            const t = null == e ? void 0 : e.type
            if ('AssignmentExpression' === t) {
              const { obj: t, key: n } = this.resolveMemberExpression(e.left, {
                  left: !0
                }),
                o = this.executeExpression(e.right)
              if ('=' === e.operator) return (t[n] = o)
              if ('+=' === e.operator) return (t[n] += o)
              if ('-=' === e.operator) return (t[n] -= o)
              if ('*=' === e.operator) return (t[n] *= o)
              if ('/=' === e.operator) return (t[n] /= o)
              var r
              if ('??=' === e.operator)
                return null !== (r = t[n]) && void 0 !== r ? r : (t[n] = o)
              throw new Error(
                "Unknown AssignmentExpression operator '" + e.operator + "'"
              )
            }
            if ('ChainExpression' === t)
              return this.executeExpression(e.expression)
            if ('MemberExpression' === t || 'JSXMemberExpression' === t) {
              const { obj: t, key: r } = this.resolveMemberExpression(e)
              return null == t ? void 0 : t[r]
            }
            if ('Identifier' === t || 'JSXIdentifier' === t)
              return this.stack.get(e.name)
            if ('JSXExpressionContainer' === t)
              return this.executeExpression(e.expression)
            if ('TemplateLiteral' === t) {
              const t = []
              for (let r = 0; r < e.quasis.length; r++) {
                const n = e.quasis[r]
                if ('TemplateElement' !== n.type)
                  throw new Error('Unknown quasis type: ' + n.type)
                t.push(n.value.cooked),
                  n.tail || t.push(this.executeExpression(e.expressions[r]))
              }
              return t.join('')
            }
            if ('CallExpression' === t || 'NewExpression' === t) {
              const r = 'NewExpression' === t,
                {
                  obj: n,
                  key: o,
                  keyword: i
                } = this.resolveMemberExpression(e.callee, { callee: !0 }),
                a = this.getArray(e.arguments)
              if (!i && (null == n ? void 0 : n[o]) instanceof Function) {
                this.vm.currentVmStack = this
                const e = r ? new n[o](...a) : n[o](...a)
                return (this.vm.currentVmStack = void 0), e
              }
              if (e.optional) return
              throw new Error('"'.concat(o, '" is not a function'))
            }
            if ('Literal' === t || 'JSXText' === t) return e.value
            if ('JSXElement' === t || 'JSXFragment' === t)
              return this.renderElement(e)
            if ('JSXExpressionContainer' === t)
              return this.executeExpression(e.expression)
            if ('BinaryExpression' === t) {
              const t = this.executeExpression(e.left),
                r = this.executeExpression(e.right)
              if ('+' === e.operator) return t + r
              if ('-' === e.operator) return t - r
              if ('%' === e.operator) return t % r
              if ('*' === e.operator) return t * r
              if ('/' === e.operator) return t / r
              if ('<' === e.operator) return t < r
              if ('|' === e.operator) return t | r
              if ('&' === e.operator) return t & r
              if ('>' === e.operator) return t > r
              if ('<=' === e.operator) return t <= r
              if ('>=' === e.operator) return t >= r
              if ('===' === e.operator || '==' === e.operator) return t === r
              if ('!==' === e.operator || '!=' === e.operator) return t !== r
              if ('in' === e.operator) return t in r
              throw new Error(
                "Unknown BinaryExpression operator '" + e.operator + "'"
              )
            }
            if ('UnaryExpression' === t) {
              if ('delete' === e.operator) {
                const { obj: t, key: r } = this.resolveMemberExpression(
                  e.argument,
                  { left: !0 }
                )
                return null == t || delete t[r]
              }
              const t = this.executeExpression(e.argument)
              if ('-' === e.operator) return -t
              if ('!' === e.operator) return !t
              if ('typeof' === e.operator) return typeof t
              throw new Error(
                "Unknown UnaryExpression operator '" + e.operator + "'"
              )
            }
            if ('LogicalExpression' === t) {
              const t = this.executeExpression(e.left)
              if ('||' === e.operator)
                return t || this.executeExpression(e.right)
              if ('&&' === e.operator)
                return t && this.executeExpression(e.right)
              if ('??' === e.operator)
                return null != t ? t : this.executeExpression(e.right)
              throw new Error(
                "Unknown LogicalExpression operator '" + e.operator + "'"
              )
            }
            if ('ConditionalExpression' === t)
              return this.executeExpression(e.test)
                ? this.executeExpression(e.consequent)
                : this.executeExpression(e.alternate)
            if ('UpdateExpression' === t) {
              const { obj: t, key: r } = this.resolveMemberExpression(
                e.argument,
                { left: !0 }
              )
              if ('++' === e.operator) return e.prefix ? ++t[r] : t[r]++
              if ('--' === e.operator) return e.prefix ? --t[r] : t[r]--
              throw new Error(
                "Unknown UpdateExpression operator '" + e.operator + "'"
              )
            }
            if ('ObjectExpression' === t)
              return e.properties.reduce((e, t) => {
                if ('Property' === t.type)
                  e[this.resolveKey(t.key, t.computed)] =
                    this.executeExpression(t.value)
                else {
                  if ('SpreadElement' !== t.type)
                    throw new Error('Unknown property type: ' + t.type)
                  {
                    const r = this.executeExpression(t.argument)
                    Tr(r), Object.assign(e, r)
                  }
                }
                return e
              }, {})
            if ('ArrayExpression' === t) return this.getArray(e.elements)
            if ('JSXEmptyExpression' === t) return null
            if ('ArrowFunctionExpression' === t)
              return this.createFunction(e.params, e.body, e.expression)
            if ('TaggedTemplateExpression' === t) {
              let t, r
              if (
                'MemberExpression' !== e.tag.type &&
                'CallExpression' !== e.tag.type
              )
                throw new Error(
                  'TaggedTemplateExpression is only supported for `styled` components'
                )
              {
                const { key: o, keyword: i } = this.resolveMemberExpression(
                  'MemberExpression' === e.tag.type ? e.tag : e.tag.callee,
                  { callee: !0 }
                )
                if ('styled' !== i)
                  throw new Error(
                    'TaggedTemplateExpression is only supported for `styled` components'
                  )
                if ('CallExpression' === e.tag.type) {
                  var n
                  const r = this.getArray(e.tag.arguments),
                    o = null == r ? void 0 : r[0],
                    i = jr(o),
                    a = this.vm.near.config.customElements[o]
                  if (!(0, St.isStyledComponent)(o) && !i && !a)
                    throw new Error(
                      'styled() can only take `styled` components, Radix component names (EG: "Accordion.Trigger"), or a customElement name (EG: "Link")'
                    )
                  t = xt()(
                    null !== (n = null != a ? a : i) && void 0 !== n ? n : o
                  )
                } else {
                  if ('keyframes' === o) t = St.keyframes
                  else {
                    if (!kr.hasOwnProperty(o))
                      throw new Error('Unsupported styled tag: ' + o)
                    t = xt()(o)
                  }
                  r = o
                }
              }
              if ('TemplateLiteral' !== e.quasi.type)
                throw new Error('Unknown quasi type: ' + e.quasi.type)
              const o = e.quasi.quasis.map((e) => {
                  if ('TemplateElement' !== e.type)
                    throw new Error('Unknown quasis type: ' + e.type)
                  return e.value.cooked
                }),
                i =
                  0 === e.quasi.expressions.length &&
                  'CallExpression' !== e.tag.type,
                a = JSON.stringify([r, ...o])
              if (i && this.vm.cachedStyledComponents.has(a))
                return this.vm.cachedStyledComponents.get(a)
              const s = e.quasi.expressions.map((e) =>
                this.executeExpression(e)
              )
              if (t instanceof Function) {
                const e = t(o, ...s)
                return i && this.vm.cachedStyledComponents.set(a, e), e
              }
              throw new Error('styled error')
            }
            throw (
              (console.log(e), new Error("Unknown expression type '" + t + "'"))
            )
          }
          createFunction(e, t, r) {
            var n = this
            return (
              (e = e.map(Fr)),
              function () {
                for (
                  var o, i, a, s = arguments.length, c = new Array(s), l = 0;
                  l < s;
                  l++
                )
                  c[l] = arguments[l]
                if (!n.vm.alive) return
                const u = !!(
                    (null == c || null === (o = c[0]) || void 0 === o
                      ? void 0
                      : o.nativeEvent) instanceof Event &&
                    null != c &&
                    null !== (i = c[0]) &&
                    void 0 !== i &&
                    i.nativeEvent.isTrusted
                  ),
                  h = n.newStack(u)
                return (
                  e.forEach((e, t) => {
                    let r,
                      n = null == c ? void 0 : c[t]
                    if (void 0 !== n)
                      try {
                        var o, i, a, s, l, u, f, d, p
                        if (
                          (null === (o = n) || void 0 === o
                            ? void 0
                            : o.nativeEvent) instanceof Event
                        ) {
                          const e = n
                          ;(n = n.nativeEvent),
                            (n._preventDefault = () => e.preventDefault()),
                            (n._stopPropagation = () => e.stopPropagation()),
                            (n._isDefaultPrevented = () =>
                              e.isDefaultPrevented()),
                            (n._isPropagationStopped = () =>
                              e.isPropagationStopped())
                        }
                        n instanceof Event
                          ? (n = te({
                              target: n.target
                                ? te({
                                    value:
                                      null === (i = n.target) || void 0 === i
                                        ? void 0
                                        : i.value,
                                    id:
                                      null === (a = n.target) || void 0 === a
                                        ? void 0
                                        : a.id,
                                    dataset:
                                      null === (s = n.target) || void 0 === s
                                        ? void 0
                                        : s.dataset,
                                    href:
                                      null === (l = n.target) || void 0 === l
                                        ? void 0
                                        : l.href,
                                    checked:
                                      null === (u = n.target) || void 0 === u
                                        ? void 0
                                        : u.checked
                                  })
                                : void 0,
                              data: n.data,
                              code: n.code,
                              key: n.key,
                              ctrlKey: n.ctrlKey,
                              altKey: n.altKey,
                              shiftKey: n.shiftKey,
                              metaKey: n.metaKey,
                              button: n.button,
                              buttons: n.buttons,
                              clientX: n.clientX,
                              clientY: n.clientY,
                              screenX: n.screenX,
                              screenY: n.screenY,
                              touches: n.touches,
                              preventDefault:
                                null !== (f = n._preventDefault) && void 0 !== f
                                  ? f
                                  : n.preventDefault,
                              stopPropagation:
                                null !== (d = n._stopPropagation) &&
                                void 0 !== d
                                  ? d
                                  : n.stopPropagation,
                              defaultPrevented: n.defaultPrevented,
                              isDefaultPrevented:
                                null !== (p = n._isDefaultPrevented) &&
                                void 0 !== p
                                  ? p
                                  : () => n.defaultPrevented,
                              isPropagationStopped: n._isPropagationStopped
                            }))
                          : n instanceof Error &&
                            (n = te({
                              type: n.type,
                              name: n.name,
                              message: n.message
                            })),
                          (r = ee(n))
                      } catch (e) {
                        console.warn(e)
                      }
                    h.stackDeclare(e, r)
                  }),
                  r
                    ? h.executeExpression(t)
                    : null === (a = h.executeStatement(t)) || void 0 === a
                    ? void 0
                    : a.result
                )
              }
            )
          }
          stackDeclare(e, t) {
            if ('Identifier' === e.type) this.stack.state[e.name] = t
            else if ('ArrayPattern' === e.type)
              Tr(t),
                e.elements.forEach((e, r) => {
                  'RestElement' === e.type
                    ? this.stackDeclare(e.argument, t.slice(r))
                    : this.stackDeclare(e, null == t ? void 0 : t[r])
                })
            else {
              if ('ObjectPattern' !== e.type)
                throw new Error('Unknown pattern type: ' + e.type)
              {
                Tr(t)
                const r = new Set()
                e.properties.forEach((e) => {
                  if ('RestElement' === e.type) {
                    const n = {}
                    I(t) &&
                      (Object.assign(n, t), r.forEach((e) => delete n[e])),
                      this.stackDeclare(e.argument, n)
                  } else
                    this.stackDeclare(
                      e.value,
                      null == t ? void 0 : t[e.key.name]
                    ),
                      r.add(e.key.name)
                })
              }
            }
          }
          executeStatement(e) {
            if (!e || 'EmptyStatement' === e.type) return null
            if ('VariableDeclaration' === e.type)
              e.declarations.forEach((e) => {
                if ('VariableDeclarator' !== e.type)
                  throw new Error(
                    "Unknown variable declaration type '" + e.type + "'"
                  )
                this.stackDeclare(Fr(e.id), this.executeExpression(e.init))
              })
            else {
              if ('ReturnStatement' === e.type)
                return { result: this.executeExpression(e.argument) }
              if ('FunctionDeclaration' === e.type)
                this.stackDeclare(
                  Mr(e.id),
                  this.createFunction(e.params, e.body, e.expression)
                )
              else if ('ExpressionStatement' === e.type)
                this.executeExpression(e.expression)
              else if ('BlockStatement' === e.type || 'Program' === e.type) {
                const t = e.body,
                  r = this.newStack()
                for (let e = 0; e < t.length; e++) {
                  const n = r.executeStatement(t[e])
                  if (n) return n
                }
              } else if ('ForStatement' === e.type) {
                const t = this.newStack()
                for (
                  t.executeStatement(e.init);
                  this.vm.loopLimit-- > 0 &&
                  (!e.test || t.executeExpression(e.test));

                ) {
                  const r = t.executeStatement(e.body)
                  if (r) {
                    if (r.break) break
                    if (!r.continue) return r
                  }
                  t.executeExpression(e.update)
                }
                if (this.vm.loopLimit <= 0)
                  throw new Error('Exceeded loop limit')
              } else if ('ForOfStatement' === e.type) {
                const t = this.newStack(),
                  r = t.executeExpression(e.right)
                Tr(r)
                for (const n of r) {
                  if (this.vm.loopLimit-- <= 0)
                    throw new Error('Exceeded loop limit')
                  if ('VariableDeclaration' === e.left.type) {
                    if (1 !== e.left.declarations.length)
                      throw new Error('Invalid for-of statement')
                    e.left.declarations.forEach((e) => {
                      if ('VariableDeclarator' !== e.type)
                        throw new Error(
                          "Unknown variable declaration type '" + e.type + "'"
                        )
                      this.stackDeclare(Fr(e.id), n)
                    })
                  } else {
                    const { obj: t, key: r } = this.resolveMemberExpression(
                      e.left,
                      { left: !0 }
                    )
                    t[r] = n
                  }
                  const r = t.executeStatement(e.body)
                  if (r) {
                    if (r.break) break
                    if (!r.continue) return r
                  }
                }
              } else if ('WhileStatement' === e.type) {
                const t = this.newStack()
                for (
                  ;
                  this.vm.loopLimit-- > 0 && t.executeExpression(e.test);

                ) {
                  const r = t.executeStatement(e.body)
                  if (r) {
                    if (r.break) break
                    if (!r.continue) return r
                  }
                }
                if (this.vm.loopLimit <= 0)
                  throw new Error('Exceeded loop limit')
              } else if ('IfStatement' === e.type) {
                const t = this.executeExpression(e.test),
                  r = this.newStack(),
                  n = t
                    ? r.executeStatement(e.consequent)
                    : r.executeStatement(e.alternate)
                if (n) return n
              } else {
                if ('BreakStatement' === e.type) return { break: !0 }
                if ('ContinueStatement' === e.type) return { continue: !0 }
                if ('ThrowStatement' === e.type)
                  throw this.executeExpression(e.argument)
                if ('TryStatement' === e.type)
                  try {
                    const t = this.newStack().executeStatement(e.block)
                    if (t) return t
                  } catch (t) {
                    if (!this.vm.alive || !e.handler) return null
                    if ('CatchClause' !== e.handler.type)
                      throw new Error(
                        "Unknown try statement handler type '" +
                          e.handler.type +
                          "'"
                      )
                    const r = this.newStack()
                    e.handler.param &&
                      r.stackDeclare(
                        Mr(e.handler.param),
                        ee(
                          t instanceof Error
                            ? {
                                name: null == t ? void 0 : t.name,
                                message: null == t ? void 0 : t.message,
                                toString: () => t.toString()
                              }
                            : t
                        )
                      )
                    const n = r.executeStatement(e.handler.body)
                    if (n) return n
                  } finally {
                    this.vm.alive &&
                      this.newStack().executeStatement(e.finalizer)
                  }
                else {
                  if ('SwitchStatement' !== e.type)
                    throw new Error("Unknown token type '" + e.type + "'")
                  {
                    const t = this.executeExpression(e.discriminant),
                      r = this.newStack(),
                      n = e.cases
                    let o = !1
                    for (const e of n) {
                      if ('SwitchCase' !== e.type)
                        throw new Error(
                          "Unknown switch case type '" + e.type + "'"
                        )
                      if (
                        !o &&
                        null !== e.test &&
                        r.executeExpression(e.test) !== t
                      )
                        continue
                      o = !0
                      let n = !1
                      for (const t of e.consequent) {
                        const e = r.executeStatement(t)
                        if (e) {
                          if (e.break) {
                            n = !0
                            break
                          }
                          return e
                        }
                      }
                      if (n) break
                    }
                  }
                }
              }
            }
            return null
          }
        }
        class Jr {
          constructor(e) {
            var t
            const {
              near: r,
              rawCode: n,
              setReactState: o,
              cache: i,
              refreshCache: a,
              confirmTransactions: s,
              depth: c,
              widgetSrc: l,
              requestCommit: u,
              version: f,
              widgetConfigs: d,
              ethersProviderContext: p,
              isModule: g
            } = e
            ;(this.alive = !0),
              (this.isModule = g),
              (this.rawCode = n),
              (this.near = r)
            try {
              ;(this.code = ((e) => {
                if (Ar.has(e)) return Ar.get(e)
                const t = Br.parse(e, Nr)
                return Ar.set(e, t), t
              })(n)),
                (this.compileError = null)
            } catch (e) {
              ;(this.code = null), (this.compileError = e), console.error(e)
            }
            this.code
              ? ((this.setReactState = o
                  ? (e) =>
                      o({
                        hooks: this.hooks,
                        state: I(e) ? Object.assign({}, e) : e
                      })
                  : () => {
                      throw new Error('State is unavailable for modules')
                    }),
                (this.setReactHook = o
                  ? (e, t) => {
                      ;(this.hooks[e] = t),
                        o({ hooks: this.hooks, state: this.state.state })
                    }
                  : () => {
                      throw new Error('State is unavailable for modules')
                    }),
                (this.cache = i),
                (this.refreshCache = a),
                (this.confirmTransactions = s),
                (this.depth = null != c ? c : 0),
                (this.widgetSrc = l),
                (this.requestCommit = u),
                (this.version = f),
                (this.cachedStyledComponents = new Map()),
                (this.widgetConfigs = d),
                (this.ethersProviderContext = p),
                (this.ethersProvider =
                  null != p && p.provider
                    ? new h.ethers.providers.Web3Provider(p.provider)
                    : null),
                (this.timeouts = new Set()),
                (this.intervals = new Set()),
                (this.websockets = []),
                (this.vmInstances = new Map()),
                (this.networkId =
                  (null === (t = d.findLast((e) => e && e.networkId)) ||
                  void 0 === t
                    ? void 0
                    : t.networkId) || r.config.networkId),
                (this.UrbitApi = new (Gt())('', '', 'near-gateways')),
                this.UrbitApi.ship,
                (this.globalFunctions = this.initGlobalFunctions()))
              : (this.alive = !1)
          }
          stop() {
            this.alive &&
              ((this.alive = !1),
              this.timeouts.forEach((e) => clearTimeout(e)),
              this.intervals.forEach((e) => clearInterval(e)),
              this.websockets.forEach((e) => e.close()),
              this.vmInstances.forEach((e) => e.stop()))
          }
          initGlobalFunctions() {
            var e = this
            const t = {
                getr: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'keys' for Social.getr")
                  return e.cachedSocialGet(
                    arguments.length <= 0 ? void 0 : arguments[0],
                    !0,
                    arguments.length <= 1 ? void 0 : arguments[1],
                    arguments.length <= 2 ? void 0 : arguments[2],
                    arguments.length <= 3 ? void 0 : arguments[3]
                  )
                },
                get: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'keys' for Social.get")
                  return e.cachedSocialGet(
                    arguments.length <= 0 ? void 0 : arguments[0],
                    !1,
                    arguments.length <= 1 ? void 0 : arguments[1],
                    arguments.length <= 2 ? void 0 : arguments[2],
                    arguments.length <= 3 ? void 0 : arguments[3]
                  )
                },
                keys: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'keys' for Social.keys")
                  return e.cachedSocialKeys(...arguments)
                },
                index: function () {
                  if (arguments.length < 2)
                    throw new Error(
                      "Missing argument 'action' and 'key` for Social.index"
                    )
                  return e.cachedIndex(...arguments)
                },
                set: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'data' for Social.set")
                  return e.socialSet(
                    arguments.length <= 0 ? void 0 : arguments[0],
                    arguments.length <= 1 ? void 0 : arguments[1]
                  )
                }
              },
              r = {
                view: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  if (r.length < 2)
                    throw new Error(
                      "Method: Near.view. Required arguments: 'contractName', 'methodName'. Optional: 'args', 'blockId/finality', 'subscribe', 'cacheOptions'"
                    )
                  const [o, i, a, s, c, l] = r
                  return e.cachedNearView(o, i, a, s, Rr(c, s), l)
                },
                asyncView: function () {
                  if (arguments.length < 2)
                    throw new Error(
                      "Method: Near.asyncView. Required arguments: 'contractName', 'methodName'. Optional: 'args', 'blockId/finality'"
                    )
                  return e.asyncNearView(...arguments)
                },
                block: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  const [o, i, a] = r
                  return e.cachedNearBlock(o, Rr(i, o), a)
                },
                call: function () {
                  if (1 === arguments.length) {
                    if (I(arguments.length <= 0 ? void 0 : arguments[0]))
                      return e.confirmTransactions([
                        arguments.length <= 0 ? void 0 : arguments[0]
                      ])
                    if (x(arguments.length <= 0 ? void 0 : arguments[0]))
                      return e.confirmTransactions(
                        arguments.length <= 0 ? void 0 : arguments[0]
                      )
                    throw new Error(
                      "Method: Near.call. Required argument: 'tx/txs'. A single argument call requires an TX object or an array of TX objects."
                    )
                  }
                  var t
                  if (arguments.length < 2 || arguments.length > 5)
                    throw new Error(
                      "Method: Near.call. Required argument: 'contractName'. If the first argument is a string: 'methodName'. Optional: 'args', 'gas' (defaults to 300Tg), 'deposit' (defaults to 0)"
                    )
                  return e.confirmTransactions([
                    {
                      contractName:
                        arguments.length <= 0 ? void 0 : arguments[0],
                      methodName: arguments.length <= 1 ? void 0 : arguments[1],
                      args:
                        null !==
                          (t = arguments.length <= 2 ? void 0 : arguments[2]) &&
                        void 0 !== t
                          ? t
                          : {},
                      gas: arguments.length <= 3 ? void 0 : arguments[3],
                      deposit: arguments.length <= 4 ? void 0 : arguments[4]
                    }
                  ])
                }
              },
              n = {
                stringify: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'obj' for JSON.stringify")
                  return (
                    Tr(arguments.length <= 0 ? void 0 : arguments[0]),
                    JSON.stringify(
                      arguments.length <= 0 ? void 0 : arguments[0],
                      arguments.length <= 1 ? void 0 : arguments[1],
                      arguments.length <= 2 ? void 0 : arguments[2]
                    )
                  )
                },
                parse: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 's' for JSON.parse")
                  try {
                    const e = JSON.parse(
                      arguments.length <= 0 ? void 0 : arguments[0]
                    )
                    return Pr(e), e
                  } catch (e) {
                    return null
                  }
                }
              },
              o = {
                keys: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'obj' for Object.keys")
                  return (
                    Tr(arguments.length <= 0 ? void 0 : arguments[0]),
                    Object.keys(arguments.length <= 0 ? void 0 : arguments[0])
                  )
                },
                values: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'obj' for Object.values")
                  return (
                    Tr(arguments.length <= 0 ? void 0 : arguments[0]),
                    Object.values(arguments.length <= 0 ? void 0 : arguments[0])
                  )
                },
                entries: function () {
                  if (arguments.length < 1)
                    throw new Error("Missing argument 'obj' for Object.entries")
                  return (
                    Tr(arguments.length <= 0 ? void 0 : arguments[0]),
                    Object.entries(
                      arguments.length <= 0 ? void 0 : arguments[0]
                    )
                  )
                },
                assign: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r]
                  t.forEach((e) => Tr(e))
                  const n = Object.assign(...t)
                  return Pr(n), n
                },
                fromEntries: function () {
                  const e = Object.fromEntries(
                    arguments.length <= 0 ? void 0 : arguments[0]
                  )
                  return Pr(e), e
                }
              },
              i = {
                init: function () {
                  if (arguments.length < 1)
                    throw new Error(
                      "Missing argument 'initialState' for State.init"
                    )
                  if (
                    null === (arguments.length <= 0 ? void 0 : arguments[0]) ||
                    'object' !=
                      typeof (arguments.length <= 0 ? void 0 : arguments[0]) ||
                    Q(arguments.length <= 0 ? void 0 : arguments[0])
                  )
                    throw new Error("'initialState' is not an object")
                  if (void 0 === e.state.state) {
                    const t = arguments.length <= 0 ? void 0 : arguments[0]
                    ;(e.state.state = t), e.setReactState(t)
                  }
                  return e.state.state
                },
                update: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  var o
                  if (I(r[0]))
                    (e.state.state =
                      null !== (o = e.state.state) && void 0 !== o ? o : {}),
                      Object.assign(e.state.state, r[0])
                  else if (r[0] instanceof Function) {
                    var i
                    ;(e.state.state =
                      null !== (i = e.state.state) && void 0 !== i ? i : {}),
                      (e.state.state = r[0](e.state.state))
                  }
                  if (void 0 === e.state.state)
                    throw new Error('The state was not initialized')
                  return e.setReactState(e.state.state), e.state.state
                },
                get: function () {
                  return e.state.state
                }
              },
              a = {
                privateSet: function () {
                  if (arguments.length < 2)
                    throw new Error(
                      "Missing argument 'key' or 'value' for Storage.privateSet"
                    )
                  return e.storageSet(
                    { src: e.widgetSrc, type: br },
                    arguments.length <= 0 ? void 0 : arguments[0],
                    arguments.length <= 1 ? void 0 : arguments[1]
                  )
                },
                privateGet: function () {
                  if (arguments.length < 1)
                    throw new Error(
                      "Missing argument 'key' for Storage.privateGet"
                    )
                  return e.storageGet(
                    { src: e.widgetSrc, type: br },
                    arguments.length <= 0 ? void 0 : arguments[0]
                  )
                },
                set: function () {
                  if (arguments.length < 2)
                    throw new Error(
                      "Missing argument 'key' or 'value' for Storage.set"
                    )
                  return e.storageSet(
                    { src: e.widgetSrc, type: Er },
                    arguments.length <= 0 ? void 0 : arguments[0],
                    arguments.length <= 1 ? void 0 : arguments[1]
                  )
                },
                get: function () {
                  var t
                  if (arguments.length < 1)
                    throw new Error(
                      "Missing argument 'key' for Storage.get. Optional argument: `widgetSrc`"
                    )
                  return e.storageGet(
                    {
                      src:
                        null !==
                          (t = arguments.length <= 1 ? void 0 : arguments[1]) &&
                        void 0 !== t
                          ? t
                          : e.widgetSrc,
                      type: Er
                    },
                    arguments.length <= 0 ? void 0 : arguments[0]
                  )
                }
              },
              s = {
                log: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  return console.log(e.widgetSrc, ...r)
                },
                warn: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  return console.warn(e.widgetSrc, ...r)
                },
                error: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  return console.error(e.widgetSrc, ...r)
                },
                info: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  return console.info(e.widgetSrc, ...r)
                }
              },
              c = {
                provider: () => this.ethersProvider,
                setChain: function () {
                  var t
                  const r =
                    null === (t = e.ethersProviderContext) || void 0 === t
                      ? void 0
                      : t.setChain
                  if (!r)
                    throw new Error(
                      "The gateway doesn't support `setChain` operation"
                    )
                  return r(...arguments)
                },
                send: function () {
                  for (
                    var t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n]
                  return e.cachedEthersCall('send', r)
                }
              },
              l = function (t) {
                var r
                if (
                  !e.currentVmStack ||
                  (null !== (r = e.currentVmStack) &&
                    void 0 !== r &&
                    r.prevStack)
                )
                  throw new Error(
                    'Method: '.concat(
                      t,
                      '. The hook can only be called from the top of the stack'
                    )
                  )
                if (!e.hooks)
                  throw new Error('Hooks are unavailable for modules')
                const n = 'useMemo' === t,
                  o = n ? 'factory' : 'callback'
                if ((arguments.length <= 1 ? 0 : arguments.length - 1) < 1)
                  throw new Error(
                    'Method: '
                      .concat(t, ". Required arguments: '")
                      .concat(o, "'. Optional: 'dependencies'")
                  )
                const i = arguments.length <= 1 ? void 0 : arguments[1]
                if (!O(i))
                  throw new Error(
                    'Method: '
                      .concat(t, ". The first argument '")
                      .concat(o, "' must be a function")
                  )
                const a = e.currentVmStack.hookIndex++,
                  s = arguments.length <= 2 ? void 0 : arguments[2],
                  c = e.hooks[a]
                if (c) {
                  const e = c.dependencies
                  if (void 0 !== e && re(e, s)) return c.memoized
                }
                const l = n ? i() : i
                return e.setReactHook(a, { memoized: l, dependencies: s }), l
              },
              u = {
                setTestApi: (e, t) => {
                  ;(this.UrbitApi.url = e), (this.UrbitApi.code = t)
                },
                ship: (e) => {
                  if ('' !== e) return (this.UrbitApi.ship = e), e
                  ;(async () => {
                    const e = await fetch(
                      ''.concat(window.location.origin, '/~/name'),
                      { method: 'get', credentials: 'include' }
                    )
                    return (await e.text()).substring(1)
                  })().then((e) => {
                    this.UrbitApi.ship = e
                  })
                },
                pokeUrbit: (e, t, r) =>
                  new Promise((n, o) => {
                    this.UrbitApi
                      ? this.UrbitApi.ship
                        ? this.UrbitApi.poke({
                            app: e,
                            mark: t,
                            json: r,
                            onSuccess: (e) => n(e),
                            onError: (e) => {
                              o(new Error('Error in Urbit.pokeUrbit(): ' + e))
                            }
                          })
                        : o(new Error('No Urbit server connected'))
                      : o(new Error('Urbit HTTP API not properly initialized'))
                  }),
                pokeNearHandler: (e) => (
                  console.log('Attempting pokeNearHandler'),
                  u.pokeUrbit('near-handler', 'near-handler-action', {
                    poke: e
                  })
                ),
                scryUrbit: (e, t) =>
                  new Promise((r, n) => {
                    this.UrbitApi
                      ? this.UrbitApi.scry({ app: e, path: t })
                          .then((e) => {
                            r(e)
                          })
                          .catch((e) => {
                            n(new Error('Error in Urbit.scryUrbit(): ' + e))
                          })
                      : n(new Error('Urbit HTTP API not properly initialized'))
                  }),
                scryNearHandler: (e) =>
                  new Promise((t, r) => {
                    u.scryUrbit('near-handler', e)
                      .then((e) => {
                        t(e)
                      })
                      .catch((e) => {
                        r(new Error('Error in Urbit.scryNearHandler(): ' + e))
                      })
                  })
              }
            return Y({
              socialGetr: t.getr,
              socialGet: t.get,
              Social: t,
              Near: r,
              stringify: n.stringify,
              JSON: n,
              Object: o,
              initState: i.init,
              State: i,
              Storage: a,
              Urbit: u,
              console: s,
              clipboard: {
                writeText: function () {
                  var t
                  return null !== (t = e.currentVmStack) &&
                    void 0 !== t &&
                    t.isTrusted
                    ? navigator.clipboard.writeText(...arguments)
                    : Promise.reject(new Error('Not trusted (not a click)'))
                }
              },
              VM: { require: this.vmRequire.bind(this) },
              Ethers: c,
              WebSocket: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                const o = new WebSocket(...r)
                return e.websockets.push(o), o
              },
              fetch: function () {
                if (arguments.length < 1)
                  throw new Error(
                    "Method: fetch. Required arguments: 'url'. Optional: 'options'"
                  )
                return e.cachedFetch(...arguments)
              },
              asyncFetch: function () {
                if (arguments.length < 1)
                  throw new Error(
                    "Method: asyncFetch. Required arguments: 'url'. Optional: 'options'"
                  )
                return e.asyncFetch(...arguments)
              },
              useCache: function () {
                if (arguments.length < 2)
                  throw new Error(
                    "Method: useCache. Required arguments: 'promiseGenerator', 'dataKey'. Optional: 'options'"
                  )
                if (!O(arguments.length <= 0 ? void 0 : arguments[0]))
                  throw new Error(
                    "Method: useCache. The first argument 'promiseGenerator' must be a function"
                  )
                return e.useCache(...arguments)
              },
              useState: function () {
                var t
                if (
                  !e.currentVmStack ||
                  (null !== (t = e.currentVmStack) &&
                    void 0 !== t &&
                    t.prevStack)
                )
                  throw new Error(
                    'Method: useState. The hook can an only be called from the top of the stack'
                  )
                if (!e.hooks)
                  throw new Error('Hooks are unavailable for modules')
                if (arguments.length < 1)
                  throw new Error(
                    "Method: useState. Required arguments: 'initialState'"
                  )
                const r = arguments.length <= 0 ? void 0 : arguments[0],
                  n = e.currentVmStack.hookIndex++,
                  o = e.hooks[n]
                if (o) return [o.state, o.setState]
                const i = (t) => {
                  var r
                  return (
                    O(t) &&
                      (t = t(
                        null === (r = e.hooks[n]) || void 0 === r
                          ? void 0
                          : r.state
                      )),
                    e.setReactHook(n, { state: t, setState: i }),
                    t
                  )
                }
                return [i(r), i]
              },
              useEffect: function () {
                var t
                if (
                  !e.currentVmStack ||
                  (null !== (t = e.currentVmStack) &&
                    void 0 !== t &&
                    t.prevStack)
                )
                  throw new Error(
                    'Method: useEffect. The hook can an only be called from the top of the stack'
                  )
                if (!e.hooks)
                  throw new Error('Hooks are unavailable for modules')
                if (arguments.length < 1)
                  throw new Error(
                    "Method: useEffect. Required arguments: 'setup'. Optional: 'dependencies'"
                  )
                const r = arguments.length <= 0 ? void 0 : arguments[0]
                if (!O(r))
                  throw new Error(
                    "Method: useEffect. The first argument 'setup' must be a function"
                  )
                const n = e.currentVmStack.hookIndex++,
                  o = arguments.length <= 1 ? void 0 : arguments[1],
                  i = e.hooks[n]
                if (i) {
                  const e = i.dependencies
                  if (void 0 !== e && re(e, o)) return
                }
                const a = null == i ? void 0 : i.cleanup
                O(a) && a(),
                  e.setReactHook(n, { cleanup: r(), dependencies: o })
              },
              useMemo: function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r]
                return l('useMemo', ...t)
              },
              useCallback: function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r]
                return l('useCallback', ...t)
              },
              setTimeout: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                const [o, i] = r,
                  a = setTimeout(() => {
                    e.alive && o()
                  }, i)
                return e.timeouts.add(a), a
              },
              setInterval: function () {
                if (e.intervals.size >= 16)
                  throw new Error(
                    'Too many intervals. Max allowed: '.concat(16)
                  )
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                const [o, i] = r,
                  a = setInterval(() => {
                    e.alive && o()
                  }, i)
                return e.intervals.add(a), a
              },
              clearTimeout: function () {
                const t = arguments.length <= 0 ? void 0 : arguments[0]
                return e.timeouts.delete(t), clearTimeout(t)
              },
              clearInterval: function () {
                const t = arguments.length <= 0 ? void 0 : arguments[0]
                return e.intervals.delete(t), clearInterval(t)
              }
            })
          }
          cachedPromise(e, t) {
            return ee(
              e({
                onInvalidate: () => {
                  this.alive && this.refreshCache()
                },
                subscribe: !!t
              })
            )
          }
          cachedSocialGet(e, t, r, n, o) {
            return (
              (e = Array.isArray(e) ? e : [e]),
              this.cachedPromise(
                (i) => this.cache.socialGet(this.near, e, t, r, n, i, o),
                null == n ? void 0 : n.subscribe
              )
            )
          }
          storageGet(e, t) {
            return this.cachedPromise((r) =>
              this.cache.localStorageGet(e, t, r)
            )
          }
          storageSet(e, t, r) {
            return this.cache.localStorageSet(e, t, r)
          }
          cachedSocialKeys(e, t, r, n) {
            return (
              (e = Array.isArray(e) ? e : [e]),
              this.cachedPromise(
                (o) =>
                  this.cache.cachedViewCall(
                    this.near,
                    this.near.config.contractName,
                    'keys',
                    { keys: e, options: r },
                    t,
                    o,
                    n
                  ),
                null == r ? void 0 : r.subscribe
              )
            )
          }
          asyncNearView(e, t, r, n) {
            return this.near.viewCall(e, t, r, n)
          }
          cachedEthersCall(e, t, r, n) {
            return this.cachedPromise(
              (r) =>
                this.cache.cachedEthersCall(this.ethersProvider, e, t, r, n),
              r
            )
          }
          cachedNearView(e, t, r, n, o, i) {
            return this.cachedPromise(
              (o) => this.cache.cachedViewCall(this.near, e, t, r, n, o, i),
              o
            )
          }
          cachedNearBlock(e, t, r) {
            return this.cachedPromise(
              (t) => this.cache.cachedBlock(this.near, e, t, r),
              t
            )
          }
          asyncFetch(e, t) {
            return this.cache.asyncFetch(e, t)
          }
          cachedFetch(e, t, r) {
            return this.cachedPromise(
              (n) => this.cache.cachedFetch(e, t, n, r),
              null == t ? void 0 : t.subscribe
            )
          }
          cachedIndex(e, t, r, n) {
            return this.cachedPromise(
              (o) => this.cache.socialIndex(this.near, e, t, r, o, n),
              null == r ? void 0 : r.subscribe
            )
          }
          useCache(e, t, r, n) {
            return this.cachedPromise(
              (r) =>
                this.cache.cachedCustomPromise(
                  { widgetSrc: this.widgetSrc, dataKey: t },
                  e,
                  r,
                  n
                ),
              null == r ? void 0 : r.subscribe
            )
          }
          socialSet(e, t) {
            return this.requestCommit({
              data: e,
              force: null == t ? void 0 : t.force,
              onCommit: null == t ? void 0 : t.onCommit,
              onCancel: null == t ? void 0 : t.onCancel
            })
          }
          vmRequire(e) {
            const t = ne(e, null, this.widgetConfigs)
            let r
            if (null != t && t.src) {
              const e = t.src,
                [n, o] = e.split('@')
              if (((r = this.cachedSocialGet(n.toString(), !1, o, void 0)), !r))
                return r
            } else null != t && t.code && (r = t.code)
            return this.getVmInstance(r, null == t ? void 0 : t.src).execCode({
              context: ee(this.context),
              forwardedProps: this.forwardedProps
            })
          }
          getVmInstance(e, t) {
            if (this.vmInstances.has(e)) {
              const t = this.vmInstances.get(e)
              if (t.rawCode === e) return t
              t.stop(), this.vmInstances.delete(e)
            }
            const r = new Jr({
              near: this.near,
              rawCode: e,
              cache: this.cache,
              refreshCache: this.refreshCache,
              confirmTransactions: this.confirmTransactions,
              depth: this.depth + 1,
              widgetSrc: t,
              requestCommit: this.requestCommit,
              version: this.version,
              widgetConfigs: this.widgetConfigs,
              ethersProviderContext: this.ethersProviderContext,
              isModule: !0
            })
            return this.vmInstances.set(e, r), r
          }
          renderCode(e) {
            if (this.compileError)
              return o().createElement(
                'div',
                { className: 'alert alert-danger' },
                'Compilation error:',
                o().createElement('pre', null, this.compileError.message),
                o().createElement('pre', null, this.compileError.stack)
              )
            if (!this.alive)
              return o().createElement(
                'div',
                { className: 'alert alert-danger' },
                'VM is dead'
              )
            const t = this.execCode(e)
            return Q(t) || 'string' == typeof t || 'number' == typeof t
              ? t
              : o().createElement('pre', null, JSON.stringify(t, void 0, 2))
          }
          execCode(e) {
            let { props: t, context: r, reactState: n, forwardedProps: o } = e
            if (this.compileError) throw this.compileError
            if (this.depth >= 32) return 'Too deep'
            this.gIndex = 0
            const { hooks: i, state: a } = null != n ? n : {}
            ;(this.hooks = i),
              (this.state = {
                ...Cr,
                ...this.globalFunctions,
                props: I(t) ? Object.assign({}, t) : t,
                context: r,
                state: a,
                get elliptic() {
                  return (
                    delete this.elliptic,
                    (this.elliptic = Rt()(It)),
                    delete this.elliptic.utils.cachedProperty,
                    this.elliptic
                  )
                }
              }),
              (this.forwardedProps = o),
              (this.loopLimit = 1e6),
              (this.vmStack = new Dr(this, void 0, this.state))
            const s = this.vmStack.executeStatement(this.code)
            if (null != s && s.break)
              throw new Error('BreakStatement outside of a loop')
            if (null != s && s.continue)
              throw new Error('ContinueStatement outside of a loop')
            return null == s ? void 0 : s.result
          }
        }
        const Gr = require('react-error-boundary'),
          zr = o().forwardRef((e, r) => {
            var n
            const {
                loading: i,
                src: a,
                code: s,
                depth: l,
                config: u,
                props: h,
                ...f
              } = e,
              [p, g] = (0, t.useState)(0),
              [m, y] = (0, t.useState)(null),
              [v, w] = (0, t.useState)(null),
              [b, S] = (0, t.useState)({ hooks: [], state: void 0 }),
              [x, I] = (0, t.useState)(0),
              [C, O] = (0, t.useState)({}),
              [N, A] = (0, t.useState)(null),
              [B, U] = (0, t.useState)(null),
              [T, P] = (0, t.useState)(null),
              [j, R] = (0, t.useState)(null),
              [M, q] = (0, t.useState)(null),
              [_, F] = (0, t.useState)(null),
              L = (0, t.useContext)(Ft),
              D =
                M &&
                (null === (n = M.findLast((e) => e && e.networkId)) ||
                void 0 === n
                  ? void 0
                  : n.networkId),
              J = gt(D),
              G = de(D),
              z = Ce(D),
              [V, H] = (0, t.useState)(null)
            ;(0, t.useEffect)(() => {
              const e = u ? (Array.isArray(u) ? u : [u]) : []
              re(e, M) || q(e)
            }, [u, M]),
              (0, t.useEffect)(() => {
                const e = ne(a, s, M)
                re(e, _) || F(e)
              }, [a, s, M, _]),
              (0, t.useEffect)(() => {
                if (G)
                  if (null != _ && _.src) {
                    const e = _.src,
                      [t, r] = e.split('@'),
                      n = J.socialGet(G, t.toString(), !1, r, void 0, () => {
                        g(p + 1)
                      })
                    y(n), w(e)
                  } else null != _ && _.code && (y(_.code), w(null))
              }, [G, _, p]),
              (0, t.useEffect)(() => {
                A(null),
                  H(null),
                  m ||
                    (void 0 === m &&
                      H(
                        o().createElement(
                          'div',
                          { className: 'alert alert-danger' },
                          'Source code for "',
                          v,
                          '" is not found'
                        )
                      ))
              }, [m, v])
            const K = (0, t.useCallback)(
                (e) => {
                  if (!G || !e || 0 === e.length) return null
                  ;(e = e.map((e) => ({
                    contractName: e.contractName,
                    methodName: e.methodName,
                    args: e.args || {},
                    deposit: e.deposit ? c()(e.deposit) : c()(0),
                    gas: e.gas ? c()(e.gas) : d.mul(30)
                  }))),
                    console.log('confirm txs', e),
                    U(e)
                },
                [G]
              ),
              $ = (0, t.useCallback)(
                (e) => {
                  if (!G) return null
                  console.log('commit requested', e), P(e)
                },
                [G]
              )
            return (
              (0, t.useEffect)(() => {
                if (!G || !m) return
                S({ hooks: [], state: void 0 })
                const e = new Jr({
                  near: G,
                  rawCode: m,
                  setReactState: S,
                  cache: J,
                  refreshCache: () => {
                    I((e) => e + 1)
                  },
                  confirmTransactions: K,
                  depth: l,
                  widgetSrc: v,
                  requestCommit: $,
                  version: Ge()(),
                  widgetConfigs: M,
                  ethersProviderContext: L
                })
                return (
                  A(e),
                  () => {
                    e.stop()
                  }
                )
              }, [v, G, m, l, $, K, M, L]),
              (0, t.useEffect)(() => {
                G &&
                  O({
                    loading: !1,
                    accountId: null != z ? z : null,
                    widgetSrc: v,
                    networkId: G.config.networkId
                  })
              }, [G, z, v]),
              (0, t.useLayoutEffect)(() => {
                if (!N) return
                const e = {
                  props: h || {},
                  context: C,
                  reactState: b,
                  cacheNonce: x,
                  version: N.version,
                  forwardedProps: { ...f, ref: r }
                }
                if (!re(e, j)) {
                  R(ee(e))
                  try {
                    var t
                    H(
                      null !== (t = N.renderCode(e)) && void 0 !== t
                        ? t
                        : 'Execution failed'
                    )
                  } catch (e) {
                    H(
                      o().createElement(
                        'div',
                        { className: 'alert alert-danger' },
                        'Execution error:',
                        o().createElement('pre', null, e.message),
                        o().createElement('pre', null, e.stack)
                      )
                    ),
                      console.error(e)
                  }
                }
              }, [N, h, C, b, x, j, r, f]),
              null != V
                ? o().createElement(
                    Gr.ErrorBoundary,
                    {
                      FallbackComponent: k,
                      onReset: () => {
                        H(null)
                      },
                      resetKeys: [V]
                    },
                    o().createElement(
                      o().Fragment,
                      null,
                      V,
                      B &&
                        o().createElement(Ve, {
                          transactions: B,
                          onHide: () => U(null),
                          networkId: D
                        }),
                      T &&
                        o().createElement(bt, {
                          show: !0,
                          widgetSrc: v,
                          data: T.data,
                          force: T.force,
                          onHide: () => P(null),
                          onCommit: T.onCommit,
                          onCancel: T.onCancel,
                          networkId: D
                        })
                    )
                  )
                : null != i
                ? i
                : E
            )
          })
      })(),
      n
    )
  })()
)
