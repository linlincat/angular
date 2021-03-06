import {OpaqueToken, bind, Binding} from 'angular2/di';
import {CONST_EXPR, StringWrapper, Math} from 'angular2/src/facade/lang';

export const DOCUMENT_TOKEN: OpaqueToken = CONST_EXPR(new OpaqueToken('DocumentToken'));

export const DOM_REFLECT_PROPERTIES_AS_ATTRIBUTES: OpaqueToken =
    CONST_EXPR(new OpaqueToken('DomReflectPropertiesAsAttributes'));


/**
 * A unique id (string) for an angular application.
 */
export const APP_ID_TOKEN: OpaqueToken = CONST_EXPR(new OpaqueToken('AppId'));

/**
 * Bindings that will generate a random APP_ID_TOKEN.
 */
export var APP_ID_RANDOM_BINDING: Binding =
    bind(APP_ID_TOKEN).toFactory(() => `${randomChar()}${randomChar()}${randomChar()}`, []);

/**
 * Defines when a compiled template should be stored as a string
 * rather than keeping its Nodes to preserve memory.
 */
export const MAX_IN_MEMORY_ELEMENTS_PER_TEMPLATE_TOKEN: OpaqueToken =
    CONST_EXPR(new OpaqueToken('MaxInMemoryElementsPerTemplate'));

function randomChar(): string {
  return StringWrapper.fromCharCode(97 + Math.floor(Math.random() * 25));
}
