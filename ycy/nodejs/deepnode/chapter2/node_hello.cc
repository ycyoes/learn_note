#include <node.h>
#include <node_hello.h>
#include <v8.h>

namespace node {
    using namespace v8;
    Handle<Value> SayHello(const Arguments& args) {
        HandleScope scope;
        return scope.Close(String::New("Hello world! "))
    }
}